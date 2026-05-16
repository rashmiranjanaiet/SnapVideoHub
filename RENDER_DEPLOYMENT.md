# Deploy SnapVideoHub on Render

SnapVideoHub should be deployed as a Render Web Service with the Docker runtime. Docker is recommended because the backend needs OS-level tools: `yt-dlp`, `ffmpeg`, `python3`, and `curl`.

## Option A: Use `render.yaml`

1. Push this repository to GitHub.
2. In Render, choose **New > Blueprint**.
3. Connect the GitHub repository.
4. Render will read `render.yaml` and create the `snapvideohub` Docker web service.
5. After deploy, open:

```text
https://YOUR-RENDER-SERVICE.onrender.com/api/health
```

You should see `extractor.ok: true` and `ffmpeg.ok: true`.

## Option B: Create Web Service Manually

Use these settings:

```text
Service type: Web Service
Repository: rashmiranjanaiet/SnapVideoHub
Branch: main
Runtime / Language: Docker
Dockerfile path: ./Dockerfile
Health check path: /api/health
```

Environment variables:

```text
NODE_ENV=production
PORT=10000
HOST=0.0.0.0
YTDLP_PATH=/usr/local/bin/yt-dlp
```

Render uses the `CMD ["npm", "start"]` from the Dockerfile.

## Test After Deploy

Open:

```text
https://YOUR-RENDER-SERVICE.onrender.com/api/health
```

Then test one direct media link in the downloader:

```text
https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4
```

Direct media should work if the service is deployed correctly.

## Important Platform Limit

Render may still be blocked by YouTube, Instagram, TikTok, Reddit, and other platforms because Render also uses cloud/datacenter IPs. If YouTube returns a bot/captcha challenge on Render, that is the platform blocking the Render server IP, not a missing Docker package.

Do not put personal account cookies into a public downloader.

## Free Plan Notes

Render Free web services spin down after inactivity and can take about a minute to wake up. Local files are ephemeral on free services, so do not rely on local file storage for permanent data.
