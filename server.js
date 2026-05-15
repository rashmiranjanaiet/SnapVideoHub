const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const dns = require("node:dns").promises;
const net = require("node:net");
const { execFile, spawn } = require("node:child_process");
const { Readable } = require("node:stream");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const maxBodyBytes = 1_000_000;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

const mediaExtensions = new Set([
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
  ".mkv",
  ".mp3",
  ".m4a",
  ".wav",
  ".aac",
  ".ogg",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp"
]);

const platforms = [
  ["youtube", "YouTube", ["youtube.com", "youtu.be", "youtube-nocookie.com"]],
  ["instagram", "Instagram", ["instagram.com", "instagr.am"]],
  ["tiktok", "TikTok", ["tiktok.com", "vm.tiktok.com", "vt.tiktok.com"]],
  ["facebook", "Facebook", ["facebook.com", "fb.watch", "fb.com"]],
  ["x", "X Twitter", ["twitter.com", "x.com"]],
  ["snapchat", "Snapchat", ["snapchat.com"]],
  ["linkedin", "LinkedIn", ["linkedin.com", "lnkd.in"]],
  ["pinterest", "Pinterest", ["pinterest.com", "pin.it"]],
  ["reddit", "Reddit", ["reddit.com", "redd.it", "v.redd.it"]],
  ["discord", "Discord", ["discord.com", "discordapp.com", "cdn.discordapp.com", "media.discordapp.net"]],
  ["telegram", "Telegram", ["t.me", "telegram.me", "telegram.dog"]],
  ["whatsapp", "WhatsApp", ["whatsapp.com", "wa.me"]],
  ["threads", "Threads", ["threads.com", "threads.net"]],
  ["dailymotion", "Dailymotion", ["dailymotion.com", "dai.ly"]],
  ["twitch", "Twitch", ["twitch.tv", "clips.twitch.tv"]]
].map(([slug, name, domains]) => ({ slug, name, domains }));

const platformBySlug = Object.fromEntries(platforms.map((platform) => [platform.slug, platform]));
let mediaExtractorToolPromise = null;

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

    if (request.method === "GET" && url.pathname === "/api/health") {
      return sendJson(response, 200, { ok: true, service: "SnapVideoHub backend" });
    }

    if (request.method === "POST" && url.pathname === "/api/analyze") {
      return handleAnalyze(request, response);
    }

    if (request.method === "GET" && url.pathname === "/api/download") {
      return handleDownload(url, response);
    }

    if (request.method === "GET" && url.pathname === "/api/media-download") {
      return handleExtractorDownload(url, response);
    }

    if (request.method === "GET" && url.pathname === "/api/youtube-download") {
      return handleExtractorDownload(url, response, "youtube");
    }

    if (request.method === "POST" && url.pathname === "/api/contact") {
      return handleContact(request, response);
    }

    if (request.method === "GET" || request.method === "HEAD") {
      return serveStatic(url.pathname, request, response);
    }

    sendJson(response, 405, { ok: false, message: "Method not allowed." });
  } catch (error) {
    sendJson(response, 500, { ok: false, message: error.message || "Server error." });
  }
});

server.listen(port, () => {
  console.log(`SnapVideoHub is running at http://localhost:${port}`);
});

async function handleAnalyze(request, response) {
  const body = await readJsonBody(request);
  const rawUrl = String(body.url || "").trim();
  const selectedPlatform = String(body.platform || "auto");
  const requestedFormat = String(body.format || "video");
  const requestedQuality = String(body.quality || "auto");

  if (!rawUrl) {
    return sendJson(response, 400, { ok: false, message: "Paste a public media URL first." });
  }

  const remoteUrl = parseHttpUrl(rawUrl);
  if (!remoteUrl) {
    return sendJson(response, 400, { ok: false, message: "Only http and https URLs are supported." });
  }

  await assertSafeRemoteUrl(remoteUrl);

  const detectedPlatform = detectPlatform(remoteUrl.href);
  const platform = selectedPlatform === "auto" ? detectedPlatform : platformBySlug[selectedPlatform] || detectedPlatform;

  const extension = getExtension(remoteUrl);
  const looksDirect = mediaExtensions.has(extension);
  const head = await safeHead(remoteUrl.href);
  const contentType = head.contentType || mimeFromExtension(extension) || "application/octet-stream";
  const directMedia = looksDirect || isMediaContentType(contentType);

  if (directMedia) {
    const fileName = fileNameFromUrl(remoteUrl, extension);
    const mediaKind = mediaKindFromContentType(contentType, extension);
    return sendJson(response, 200, {
      ok: true,
      status: "ready",
      platformName: platform?.name || "Direct Media URL",
      mediaKind,
      message: "This direct public media file is ready to download.",
      note: conversionNote(requestedFormat, mediaKind, requestedQuality),
      options: [
        {
          label: `${mediaKind.label} file`,
          icon: mediaKind.icon,
          description: `${formatBytes(head.contentLength)} ${contentType}`.trim(),
          previewUrl: directMediaUrl(remoteUrl.href, fileName, true),
          downloadUrl: directMediaUrl(remoteUrl.href, fileName)
        }
      ]
    });
  }

  if (platform) {
    return handleExtractorAnalyze(remoteUrl, platform, { requestedFormat, requestedQuality }, response);
  }

  sendJson(response, 200, {
    ok: true,
    status: "unsupported",
    platformName: "Unknown website",
    message: "This URL is not a direct media file and no platform connector is configured for it.",
    note: "Try a direct .mp4, .mp3, .webm, .jpg, .png, .gif, or .webp URL.",
    options: []
  });
}

async function handleDownload(url, response) {
  const rawUrl = String(url.searchParams.get("url") || "").trim();
  const requestedName = String(url.searchParams.get("name") || "").trim();
  const inline = url.searchParams.get("inline") === "1";
  const remoteUrl = parseHttpUrl(rawUrl);

  if (!remoteUrl) {
    return sendJson(response, 400, { ok: false, message: "Invalid download URL." });
  }

  await assertSafeRemoteUrl(remoteUrl);

  const upstream = await fetchWithRedirect(remoteUrl.href, { method: "GET" });
  if (!upstream.ok || !upstream.body) {
    return sendJson(response, 502, { ok: false, message: `Remote server returned ${upstream.status}.` });
  }

  const finalUrl = new URL(upstream.url || remoteUrl.href);
  await assertSafeRemoteUrl(finalUrl);

  const extension = getExtension(finalUrl);
  const contentType = upstream.headers.get("content-type") || mimeFromExtension(extension) || "application/octet-stream";
  if (!mediaExtensions.has(extension) && !isMediaContentType(contentType)) {
    return sendJson(response, 400, { ok: false, message: "This URL is not a direct downloadable media file." });
  }

  const fileName = safeFileName(requestedName) || fileNameFromUrl(finalUrl, extension);
  response.writeHead(200, {
    "Content-Type": contentType,
    "Content-Disposition": contentDisposition(fileName, inline),
    "Cache-Control": "no-store"
  });
  Readable.fromWeb(upstream.body).pipe(response);
}

async function handleExtractorAnalyze(remoteUrl, platform, requestOptions, response) {
  const tool = await getMediaExtractorTool();
  if (!tool) {
    return sendJson(response, 200, {
      ok: true,
      status: "connector_required",
      platformName: platform.name,
      message: `${platform.name} connector is not installed. Install yt-dlp, then restart this server.`,
      note: "Windows install command: py -m pip install --user yt-dlp. The connector is shared by all supported public platform pages.",
      options: []
    });
  }

  let info;
  try {
    info = await getExtractorInfo(tool, remoteUrl.href);
  } catch (error) {
    return sendJson(response, 200, {
      ok: true,
      status: "connector_required",
      platformName: platform.name,
      message: cleanExtractorError(error.message),
      note: "Only public media is supported. The server does not use account cookies, bypass logins, bypass private pages, remove DRM, or remove watermarks.",
      options: []
    });
  }

  const options = buildExtractorOptions(info, remoteUrl, platform, requestOptions);

  sendJson(response, 200, {
    ok: true,
    status: options.length ? "ready" : "connector_required",
    platformName: platform.name,
    title: info.title,
    message: options.length ? `${platform.name} public media options are ready.` : "No downloadable public formats were returned for this link.",
    note: "Public media only. Login-required, private, blocked, DRM-protected, and bot-check pages can fail. MP3 conversion or merged HD formats may need ffmpeg; otherwise the server returns the original stream format.",
    options
  });
}

async function handleExtractorDownload(url, response, expectedPlatformSlug = "") {
  const rawUrl = String(url.searchParams.get("url") || "").trim();
  const formatSelector = String(url.searchParams.get("format") || "best").trim();
  const requestedName = String(url.searchParams.get("name") || "snapvideohub-media.mp4").trim();
  const inline = url.searchParams.get("inline") === "1";
  const remoteUrl = parseHttpUrl(rawUrl);

  if (!remoteUrl) {
    return sendJson(response, 400, { ok: false, message: "Invalid media URL." });
  }

  const platform = detectPlatform(remoteUrl.href);
  if (!platform || (expectedPlatformSlug && platform.slug !== expectedPlatformSlug)) {
    return sendJson(response, 400, { ok: false, message: "This media route only supports configured public platform URLs." });
  }

  if (!isSafeFormatSelector(formatSelector)) {
    return sendJson(response, 400, { ok: false, message: "Invalid format selector." });
  }

  await assertSafeRemoteUrl(remoteUrl);

  const tool = await getMediaExtractorTool();
  if (!tool) {
    return sendJson(response, 500, { ok: false, message: "Public media connector is not installed." });
  }

  const fileName = safeFileName(requestedName) || `${platform.slug}-media.mp4`;
  const extension = path.extname(fileName).toLowerCase();
  response.writeHead(200, {
    "Content-Type": mimeFromExtension(extension) || "application/octet-stream",
    "Content-Disposition": contentDisposition(fileName, inline),
    "Cache-Control": "no-store"
  });

  const child = spawn(tool.command, [
    ...tool.prefixArgs,
    "--ignore-config",
    "--no-playlist",
    "--no-warnings",
    "-f",
    formatSelector,
    "-o",
    "-",
    remoteUrl.href
  ], { stdio: ["ignore", "pipe", "pipe"] });

  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });
  child.stdout.pipe(response);
  response.on("close", () => {
    if (!child.killed) child.kill("SIGTERM");
  });
  child.on("error", (error) => {
    if (!response.destroyed) response.end();
    console.error(cleanExtractorError(error.message));
  });
  child.on("close", (code) => {
    if (code && !response.destroyed) {
      console.error(cleanExtractorError(stderr) || `yt-dlp exited with code ${code}`);
      response.end();
    }
  });
}

function buildExtractorOptions(info, remoteUrl, platform, requestOptions) {
  const requestedFormat = requestOptions.requestedFormat;
  const requestedQuality = requestOptions.requestedQuality;
  const entries = collectMediaEntries(info);
  const items = entries.length ? entries : [info];
  const options = [];
  const seen = new Set();

  const addOption = (option) => {
    if (!option?.downloadUrl) return;
    const key = `${option.label}|${option.downloadUrl}`;
    if (seen.has(key) || options.length >= 12) return;
    seen.add(key);
    options.push(option);
  };

  items.slice(0, 6).forEach((item, index) => {
    const sourceUrl = extractorSourceUrl(item, info, remoteUrl);
    const rawTitle = item.title || info.title || `${platform.name} media`;
    const title = safeFileName(rawTitle) || `${platform.slug}-media`;
    const prefix = items.length > 1 ? `Media ${index + 1}: ` : "";
    const thumbnail = firstHttpUrl(item.thumbnail, info.thumbnail);

    if (requestedFormat === "thumbnail") {
      if (thumbnail) {
        addOption({
          label: `${prefix}Thumbnail image`,
          icon: "image",
          description: "Original thumbnail or preview image returned by the public extractor.",
          previewUrl: directMediaUrl(thumbnail, `${title}-thumbnail.jpg`, true),
          downloadUrl: directMediaUrl(thumbnail, `${title}-thumbnail.jpg`)
        });
      } else {
        addBestExtractorOption(addOption, sourceUrl, "best", `${title}.jpg`, `${prefix}Best available image`, "image", "The extractor will try to download the best public image or preview.");
      }
      return;
    }

    if (requestedFormat === "audio") {
      const audio = bestAudioFormat(item);
      if (audio) {
        const ext = cleanExtension(audio.ext) || "m4a";
        addOption({
          label: `${prefix}${ext.toUpperCase()} audio`,
          icon: "music",
          description: audioDescription(audio),
          previewUrl: extractorDownloadUrl(sourceUrl, audio.format_id, `${title}.${ext}`, true),
          downloadUrl: extractorDownloadUrl(sourceUrl, audio.format_id, `${title}.${ext}`)
        });
      } else {
        addBestExtractorOption(addOption, sourceUrl, "bestaudio/best", `${title}.m4a`, `${prefix}Best available audio`, "music", "The extractor will try to return the best public audio stream.");
      }
      return;
    }

    const videos = preferredVideoFormats(item, requestedQuality);
    const perItemLimit = items.length > 1 ? 2 : 5;
    for (const format of videos.slice(0, perItemLimit)) {
      const ext = cleanExtension(format.ext) || "mp4";
      const height = format.height ? `${format.height}p` : ext.toUpperCase();
      const labelFormat = requestedFormat === "gif" ? "source video" : "video";
      addOption({
        label: `${prefix}${height} ${labelFormat}`,
        icon: requestedFormat === "gif" ? "film" : "video",
        description: videoDescription(format),
        thumbnailUrl: thumbnail ? directMediaUrl(thumbnail, `${title}-thumbnail.jpg`, true) : "",
        previewUrl: extractorDownloadUrl(sourceUrl, format.format_id, `${title}-${height}.${ext}`, true),
        downloadUrl: extractorDownloadUrl(sourceUrl, format.format_id, `${title}-${height}.${ext}`)
      });
    }

    if (!videos.length) {
      const fallbackName = requestedFormat === "gif" ? `${title}.mp4` : `${title}.${cleanExtension(item.ext) || "mp4"}`;
      addBestExtractorOption(addOption, sourceUrl, "best", fallbackName, `${prefix}Best available media`, requestedFormat === "gif" ? "film" : "download", "The extractor will try to return the best public media file for this link.");
    }

    if (thumbnail && options.length < 10) {
      addOption({
        label: `${prefix}Thumbnail image`,
        icon: "image",
        description: "Download the preview image returned by the public extractor.",
        previewUrl: directMediaUrl(thumbnail, `${title}-thumbnail.jpg`, true),
        downloadUrl: directMediaUrl(thumbnail, `${title}-thumbnail.jpg`)
      });
    }
  });

  return options;
}

function collectMediaEntries(info) {
  const entries = [];
  const visit = (item) => {
    if (!item || typeof item !== "object") return;
    if (Array.isArray(item.entries) && item.entries.length) {
      item.entries.forEach(visit);
      return;
    }
    entries.push(item);
  };
  visit(info);
  return entries;
}

function extractorSourceUrl(item, rootInfo, remoteUrl) {
  const candidates = [
    item.webpage_url,
    item.original_url,
    rootInfo.webpage_url,
    rootInfo.original_url,
    remoteUrl.href
  ];

  for (const candidate of candidates) {
    const parsed = parseHttpUrl(String(candidate || ""));
    if (parsed && detectPlatform(parsed.href)) return parsed.href;
  }
  return remoteUrl.href;
}

function firstHttpUrl(...values) {
  for (const value of values) {
    const parsed = parseHttpUrl(String(value || ""));
    if (parsed) return parsed.href;
  }
  return "";
}

function preferredVideoFormats(item, requestedQuality) {
  const formats = Array.isArray(item.formats) ? item.formats : [];
  const candidates = formats
    .filter((format) => format.format_id && format.vcodec !== "none" && isVideoExtension(format.ext))
    .sort((a, b) => scoreVideoFormat(b) - scoreVideoFormat(a));
  const withAudio = candidates.filter((format) => format.acodec && format.acodec !== "none");
  const sorted = withAudio.length ? withAudio : candidates;
  const targetHeight = qualityTargetHeight(requestedQuality);
  const preferred = targetHeight
    ? sorted.filter((format) => !format.height || format.height <= targetHeight)
    : sorted;
  return uniqueVideoHeights(preferred.length ? preferred : sorted);
}

function bestAudioFormat(item) {
  const formats = Array.isArray(item.formats) ? item.formats : [];
  return formats
    .filter((format) => format.format_id && format.acodec !== "none" && format.vcodec === "none")
    .sort((a, b) => scoreAudioFormat(b) - scoreAudioFormat(a))[0];
}

function addBestExtractorOption(addOption, sourceUrl, selector, fileName, label, icon, description) {
  addOption({
    label,
    icon,
    description,
    previewUrl: extractorDownloadUrl(sourceUrl, selector, fileName, true),
    downloadUrl: extractorDownloadUrl(sourceUrl, selector, fileName)
  });
}

function directMediaUrl(sourceUrl, fileName, inline = false) {
  const params = new URLSearchParams({
    url: sourceUrl,
    name: fileName
  });
  if (inline) params.set("inline", "1");
  return `/api/download?${params.toString()}`;
}

function extractorDownloadUrl(sourceUrl, formatSelector, fileName, inline = false) {
  const params = new URLSearchParams({
    url: sourceUrl,
    format: formatSelector,
    name: fileName
  });
  if (inline) params.set("inline", "1");
  return `/api/media-download?${params.toString()}`;
}

function videoDescription(format) {
  const parts = [];
  if (format.filesize || format.filesize_approx) parts.push(formatBytes(format.filesize || format.filesize_approx));
  if (format.ext) parts.push(String(format.ext).toUpperCase());
  if (format.acodec && format.acodec !== "none") parts.push("with audio");
  if (format.fps) parts.push(`${Math.round(format.fps)} fps`);
  return parts.join(" - ") || "Public video stream returned by the extractor.";
}

function audioDescription(format) {
  const parts = [];
  if (format.abr) parts.push(`${Math.round(format.abr)} kbps`);
  if (format.ext) parts.push(String(format.ext).toUpperCase());
  if (format.filesize || format.filesize_approx) parts.push(formatBytes(format.filesize || format.filesize_approx));
  return parts.join(" - ") || "Best available audio-only stream.";
}

function qualityTargetHeight(value) {
  return {
    "4k": 2160,
    "2k": 1440,
    "1080p": 1080,
    "720p": 720
  }[value] || 0;
}

function cleanExtension(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 8);
}

function isVideoExtension(value) {
  const ext = cleanExtension(value);
  return !ext || ["mp4", "webm", "mov", "m4v", "mkv"].includes(ext);
}

function scoreVideoFormat(format) {
  const heightScore = (format.height || 0) * 10000;
  const bitrateScore = (format.tbr || format.vbr || 0) * 10;
  const audioScore = format.acodec && format.acodec !== "none" ? 5000 : 0;
  const extScore = format.ext === "mp4" ? 1000 : 0;
  return heightScore + bitrateScore + audioScore + extScore;
}

function isSafeFormatSelector(value) {
  return /^[a-zA-Z0-9_.+,:/\-[\]()=<>!?]+$/.test(value || "");
}

async function handleContact(request, response) {
  const body = await readJsonBody(request);
  const message = {
    createdAt: new Date().toISOString(),
    name: String(body.name || "").slice(0, 120),
    email: String(body.email || "").slice(0, 180),
    subject: String(body.subject || "").slice(0, 180),
    message: String(body.message || "").slice(0, 4000)
  };

  const dataDir = path.join(root, "data");
  fs.mkdirSync(dataDir, { recursive: true });
  fs.appendFileSync(path.join(dataDir, "contact-messages.jsonl"), `${JSON.stringify(message)}\n`);
  sendJson(response, 200, { ok: true, message: "Message saved locally." });
}

function serveStatic(pathname, request, response) {
  const cleanPath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const filePath = path.resolve(root, `.${cleanPath}`);
  if (!filePath.startsWith(root)) {
    return sendJson(response, 403, { ok: false, message: "Forbidden." });
  }

  fs.stat(filePath, (error, stat) => {
    if (error || !stat.isFile()) {
      response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      response.end(fs.readFileSync(path.join(root, "index.html"), "utf8"));
      return;
    }

    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store"
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    fs.createReadStream(filePath).pipe(response);
  });
}

async function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > maxBodyBytes) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body."));
      }
    });
    request.on("error", reject);
  });
}

async function safeHead(url) {
  try {
    const response = await fetchWithRedirect(url, { method: "HEAD" });
    return {
      contentType: response.headers.get("content-type") || "",
      contentLength: Number(response.headers.get("content-length") || 0)
    };
  } catch {
    return { contentType: "", contentLength: 0 };
  }
}

async function getMediaExtractorTool() {
  if (!mediaExtractorToolPromise) {
    mediaExtractorToolPromise = findMediaExtractorTool();
  }
  return mediaExtractorToolPromise;
}

async function findMediaExtractorTool() {
  const candidates = [
    { command: "yt-dlp", prefixArgs: [] },
    { command: "py", prefixArgs: ["-m", "yt_dlp"] },
    { command: "python", prefixArgs: ["-m", "yt_dlp"] }
  ];

  for (const candidate of candidates) {
    try {
      await execFileText(candidate.command, [...candidate.prefixArgs, "--version"], { timeout: 10000, maxBuffer: 20000 });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

async function getExtractorInfo(tool, url) {
  const output = await execFileText(tool.command, [
    ...tool.prefixArgs,
    "--ignore-config",
    "--dump-single-json",
    "--no-playlist",
    "--no-warnings",
    "--skip-download",
    url
  ], { timeout: 45000, maxBuffer: 25 * 1024 * 1024 });
  return JSON.parse(output);
}

function execFileText(command, args, options) {
  return new Promise((resolve, reject) => {
    execFile(command, args, {
      windowsHide: true,
      timeout: options.timeout,
      maxBuffer: options.maxBuffer
    }, (error, stdout, stderr) => {
      if (error) {
        error.message = stderr || error.message;
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

async function fetchWithRedirect(url, options = {}, redirectsLeft = 5) {
  let current = new URL(url);
  for (let index = 0; index <= redirectsLeft; index += 1) {
    await assertSafeRemoteUrl(current);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(current.href, {
        ...options,
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "User-Agent": "SnapVideoHub/1.0",
          ...(options.headers || {})
        }
      });
      if (![301, 302, 303, 307, 308].includes(response.status)) {
        return response;
      }
      const location = response.headers.get("location");
      if (!location) return response;
      current = new URL(location, current.href);
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error("Too many redirects.");
}

function parseHttpUrl(value) {
  try {
    const parsed = new URL(value);
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    return parsed;
  } catch {
    return null;
  }
}

async function assertSafeRemoteUrl(parsedUrl) {
  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("Only http and https URLs are allowed.");
  }

  const hostname = parsedUrl.hostname.toLowerCase();
  if (!hostname || hostname === "localhost" || hostname.endsWith(".localhost") || hostname.endsWith(".local")) {
    throw new Error("Local network URLs are blocked.");
  }

  const literalType = net.isIP(hostname);
  if (literalType && isPrivateIp(hostname)) {
    throw new Error("Private network URLs are blocked.");
  }

  if (!literalType) {
    const addresses = await dns.lookup(hostname, { all: true });
    if (!addresses.length || addresses.some((entry) => isPrivateIp(entry.address))) {
      throw new Error("Private network URLs are blocked.");
    }
  }
}

function isPrivateIp(address) {
  const normalized = address.toLowerCase();
  if (normalized === "::1" || normalized.startsWith("fe80:") || normalized.startsWith("fc") || normalized.startsWith("fd")) {
    return true;
  }
  const v4 = normalized.startsWith("::ffff:") ? normalized.slice(7) : normalized;
  const parts = v4.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return false;
  return (
    parts[0] === 10 ||
    parts[0] === 127 ||
    (parts[0] === 169 && parts[1] === 254) ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168) ||
    (parts[0] === 0)
  );
}

function detectPlatform(value) {
  const parsed = parseHttpUrl(String(value || ""));
  const hostname = parsed?.hostname.toLowerCase() || "";
  if (!hostname) return null;
  return platforms.find((platform) => platform.domains.some((domain) => hostMatchesDomain(hostname, domain)));
}

function hostMatchesDomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

function uniqueVideoHeights(formats) {
  const seen = new Set();
  const unique = [];
  for (const format of formats) {
    const key = format.height || format.format_id;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(format);
  }
  return unique;
}

function scoreAudioFormat(format) {
  const extScore = format.ext === "m4a" ? 1000 : 0;
  return extScore + (format.abr || format.tbr || 0);
}

function cleanExtractorError(message) {
  const text = String(message || "")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.replace(/^ERROR:\s*/i, "").trim())
    .filter(Boolean)
    .slice(-3)
    .join(" ");
  return text || "Public media connector could not process this link.";
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function getExtension(parsedUrl) {
  return path.extname(parsedUrl.pathname).toLowerCase();
}

function mimeFromExtension(extension) {
  return {
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mov": "video/quicktime",
    ".m4v": "video/x-m4v",
    ".mkv": "video/x-matroska",
    ".mp3": "audio/mpeg",
    ".m4a": "audio/mp4",
    ".wav": "audio/wav",
    ".aac": "audio/aac",
    ".ogg": "audio/ogg",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp"
  }[extension];
}

function isMediaContentType(contentType) {
  return /^(video|audio|image)\//i.test(contentType || "");
}

function mediaKindFromContentType(contentType, extension) {
  const type = contentType.toLowerCase();
  if (type.startsWith("audio/") || [".mp3", ".m4a", ".wav", ".aac", ".ogg"].includes(extension)) {
    return { label: "Audio", icon: "music" };
  }
  if (type.startsWith("image/") || [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension)) {
    return { label: "Image", icon: "image" };
  }
  return { label: "Video", icon: "video" };
}

function conversionNote(requestedFormat, mediaKind, requestedQuality) {
  const requested = requestedFormat === "thumbnail" ? "image" : requestedFormat;
  const actual = mediaKind.label.toLowerCase();
  if (requested !== actual && !(requested === "gif" && actual === "image")) {
    return `Direct media download is enabled. Format conversion to ${requestedFormat} and quality transcoding (${requestedQuality}) need a separate processing service.`;
  }
  return "Direct public media download is enabled. Quality depends on the original file.";
}

function fileNameFromUrl(parsedUrl, extension) {
  const base = path.basename(decodeURIComponent(parsedUrl.pathname || "")) || `snapvideohub${extension || ".bin"}`;
  return safeFileName(base) || `snapvideohub${extension || ".bin"}`;
}

function safeFileName(value) {
  return String(value || "")
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function contentDisposition(fileName, inline = false) {
  const safeName = safeFileName(fileName) || "snapvideohub-download";
  const asciiName = safeName
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/["\\]/g, "-")
    .trim() || "snapvideohub-download";
  return `${inline ? "inline" : "attachment"}; filename="${asciiName}"; filename*=UTF-8''${encodeURIComponent(safeName)}`;
}

function formatBytes(bytes) {
  if (!bytes) return "";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }
  return `${size.toFixed(unit ? 1 : 0)} ${units[unit]}`;
}
