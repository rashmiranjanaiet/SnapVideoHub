const platforms = [
  {
    slug: "youtube",
    name: "YouTube",
    color: "#ff0000",
    icon: "youtube",
    domains: ["youtube.com", "youtu.be", "youtube-nocookie.com"],
    title: "YouTube Video, Shorts, MP3 and Thumbnail Downloader",
    short: "Download YouTube videos, Shorts, MP3 audio, and original thumbnails.",
    description: "Paste a public YouTube video or Shorts link, choose MP4 video, MP3 audio, HD, Full HD, 4K, or thumbnail output, and prepare a clean download flow.",
    types: ["MP4 video", "Shorts", "MP3 audio", "Original thumbnail", "HD", "Full HD", "4K"],
    tips: ["Use the original YouTube watch or Shorts link.", "Private, deleted, restricted, or unavailable videos may not return formats.", "Choose MP3 when you only need audio."]
  },
  {
    slug: "instagram",
    name: "Instagram",
    color: "#e4405f",
    icon: "instagram",
    domains: ["instagram.com", "instagr.am"],
    title: "Instagram Reels, Stories, Posts and Photo Downloader",
    short: "Save Instagram Reels, public stories, posts, videos, and photos.",
    description: "Use this page for public Instagram media links including Reels, post videos, stories, carousel media, and photos in available quality.",
    types: ["Reels", "Stories", "Posts", "Photos", "Carousel media", "HD video"],
    tips: ["Copy the share link from the Instagram app or browser.", "Use public media links only.", "For best quality, use the original post link."]
  },
  {
    slug: "tiktok",
    name: "TikTok",
    color: "#00f2ea",
    icon: "tiktok",
    domains: ["tiktok.com", "vm.tiktok.com", "vt.tiktok.com"],
    title: "TikTok Video Downloader Without Watermark HD",
    short: "Download TikTok videos, sounds, and audio with HD options.",
    description: "Paste a TikTok video URL to prepare HD video, no-watermark video, and MP3 audio choices where available from the source.",
    types: ["HD video", "No watermark option", "MP3 sound", "Video thumbnail"],
    tips: ["Copy the TikTok share URL directly.", "Choose no-watermark only when legally allowed.", "MP3 is useful for public sounds and clips."]
  },
  {
    slug: "facebook",
    name: "Facebook",
    color: "#1877f2",
    icon: "facebook",
    domains: ["facebook.com", "fb.watch", "fb.com"],
    title: "Facebook Video and Reels Downloader Online",
    short: "Download Facebook videos, Reels, clips, and public post media.",
    description: "Use Facebook public video or Reel links to prepare MP4 format choices, quality levels, and thumbnail output.",
    types: ["Videos", "Reels", "Public clips", "MP4", "HD quality", "Thumbnail"],
    tips: ["Public Facebook links work best.", "Private group or login-only content may be blocked.", "Copy the full post or video link."]
  },
  {
    slug: "x",
    name: "X Twitter",
    color: "#111111",
    icon: "x",
    domains: ["twitter.com", "x.com"],
    title: "X Twitter Video, GIF and Media Downloader",
    short: "Download videos, GIFs, and media from public posts on X.",
    description: "Paste a public X or Twitter post URL to prepare MP4, GIF, and media download choices with available quality levels.",
    types: ["MP4 video", "GIF", "Post media", "Thumbnail", "HD quality"],
    tips: ["Use the post URL, not only a profile URL.", "Some posts may contain several media files.", "Public links give the best results."]
  },
  {
    slug: "snapchat",
    name: "Snapchat",
    color: "#fffc00",
    icon: "snapchat",
    domains: ["snapchat.com"],
    title: "Snapchat Spotlight Video and Story Downloader",
    short: "Save Snapchat Spotlight videos and public story clips.",
    description: "Paste a public Snapchat Spotlight or story link to prepare HD video, preview image, and MP4 options.",
    types: ["Spotlight videos", "Stories", "MP4", "HD video", "Preview image"],
    tips: ["Use public Snapchat links.", "App-only or private content may not be available.", "Respect creator permissions."]
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    color: "#0a66c2",
    icon: "linkedin",
    domains: ["linkedin.com", "lnkd.in"],
    title: "LinkedIn Video and Media Downloader Online",
    short: "Save public LinkedIn post videos and media files.",
    description: "Paste a LinkedIn post URL to prepare public video and media download choices for business, learning, and saved references.",
    types: ["Post video", "Media preview", "MP4", "HD quality"],
    tips: ["Use public post URLs.", "Login-restricted company or profile media can be unavailable.", "Keep downloaded content for lawful personal use."]
  },
  {
    slug: "pinterest",
    name: "Pinterest",
    color: "#e60023",
    icon: "pinterest",
    domains: ["pinterest.com", "pin.it"],
    title: "Pinterest Video, Pin and Image Downloader HD",
    short: "Download Pinterest videos, pins, images, and idea media.",
    description: "Paste a Pinterest pin URL to prepare image, video, and HD download choices for public pins and idea posts.",
    types: ["Pins", "Videos", "Images", "Idea pins", "HD media"],
    tips: ["Copy the Pin URL from share options.", "Image pins and video pins return different output types.", "Use source links responsibly."]
  },
  {
    slug: "reddit",
    name: "Reddit",
    color: "#ff4500",
    icon: "reddit",
    domains: ["reddit.com", "redd.it", "v.redd.it"],
    title: "Reddit Video Downloader with Audio Support",
    short: "Download Reddit videos with merged audio when available.",
    description: "Paste a public Reddit post URL to prepare video downloads, audio merge output, GIF-style clips, and HD options.",
    types: ["Video with audio", "MP4", "GIF clips", "Post media", "HD quality"],
    tips: ["Copy the Reddit post URL.", "Some Reddit videos store audio separately.", "Use the merged audio output when available."]
  },
  {
    slug: "discord",
    name: "Discord",
    color: "#5865f2",
    icon: "discord",
    domains: ["discord.com", "discordapp.com", "cdn.discordapp.com", "media.discordapp.net"],
    title: "Discord Video, GIF and Attachment Downloader",
    short: "Download public Discord media links, GIFs, and attachments.",
    description: "Paste a direct Discord media, CDN, or attachment URL to prepare videos, GIFs, images, and file output choices.",
    types: ["Attachments", "GIFs", "Images", "Videos", "Files"],
    tips: ["Use a direct public media link.", "Private server links can expire.", "Never share private messages or credentials."]
  },
  {
    slug: "telegram",
    name: "Telegram",
    color: "#26a5e4",
    icon: "telegram",
    domains: ["t.me", "telegram.me", "telegram.dog"],
    title: "Telegram Video and File Downloader Online",
    short: "Download public Telegram videos, files, and channel media.",
    description: "Paste a public Telegram post URL to prepare secure video, file, and media output options.",
    types: ["Channel videos", "Files", "Images", "MP4", "Document media"],
    tips: ["Public channel or post URLs work best.", "Private chats are not supported.", "Use the full t.me post link."]
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    color: "#25d366",
    icon: "whatsapp",
    domains: ["whatsapp.com", "wa.me"],
    title: "WhatsApp Status, Video and Photo Downloader",
    short: "Save WhatsApp status videos, photos, and shared public media links.",
    description: "Use this tool page for WhatsApp status-style media workflows, video, photo, and public shared media links.",
    types: ["Status video", "Status photo", "MP4", "Images"],
    tips: ["Use only media you have permission to save.", "Some WhatsApp content is local to the device.", "Do not share private chat data."]
  },
  {
    slug: "threads",
    name: "Threads",
    color: "#111111",
    icon: "threads",
    domains: ["threads.com", "threads.net"],
    title: "Threads Video, Reels and Photo Downloader",
    short: "Download public Threads videos, photos, and media posts.",
    description: "Paste a public Threads post URL to prepare video, photo, and media choices for fast saving.",
    types: ["Videos", "Photos", "Post media", "MP4", "HD preview"],
    tips: ["Use a public Threads post link.", "Multiple images may return multiple media options.", "Respect copyright and platform terms."]
  },
  {
    slug: "dailymotion",
    name: "Dailymotion",
    color: "#0066dc",
    icon: "dailymotion",
    domains: ["dailymotion.com", "dai.ly"],
    title: "Dailymotion HD Video Downloader Free",
    short: "Download Dailymotion videos in HD quality where available.",
    description: "Paste a Dailymotion video URL to prepare MP4 video, quality choices, and thumbnail output.",
    types: ["MP4 video", "HD", "Full HD", "Thumbnail", "Stream clips"],
    tips: ["Copy the full Dailymotion video link.", "Available quality depends on the source upload.", "Choose a lower quality if your connection is slow."]
  },
  {
    slug: "twitch",
    name: "Twitch",
    color: "#9146ff",
    icon: "twitch",
    domains: ["twitch.tv", "clips.twitch.tv"],
    title: "Twitch Clip, Stream and VOD Downloader",
    short: "Download Twitch clips, stream highlights, and VOD media.",
    description: "Paste a Twitch clip, stream, or VOD URL to prepare clip, MP4, and available quality download choices.",
    types: ["Clips", "Streams", "VODs", "MP4", "Quality selection"],
    tips: ["Use clip or VOD URLs for best results.", "Long streams can take more time to process.", "Respect streamer and platform rules."]
  }
];

const mp3Tool = {
  slug: "mp3",
  name: "MP3",
  color: "#ffb000",
  icon: "music",
  domains: [],
  title: "Online MP3 Audio Downloader",
  short: "Extract MP3 audio from supported public video links.",
  description: "Paste a supported public video URL and choose MP3 audio quality for music, podcasts, sounds, lessons, clips, and voice content.",
  types: ["MP3 audio", "128 kbps", "192 kbps", "320 kbps", "Audio preview"],
  tips: ["Use a supported public video link.", "Choose MP3 when you do not need video.", "Audio quality depends on the original source."]
};

const allTools = [mp3Tool, ...platforms];
const platformBySlug = Object.fromEntries(allTools.map((platform) => [platform.slug, platform]));
const API_BASE = location.protocol === "file:" ? "http://localhost:3000" : "";

const LANGUAGE_STORAGE_KEY = "snapvideohub-language";
const GOOGLE_TRANSLATE_ELEMENT_ID = "google_translate_element";
const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-script";
const RESULT_SCROLL_HANDOFF_TICKS = 3;

const languages = [
  { code: "en", nativeName: "English", name: "English", dir: "ltr" },
  { code: "hi", nativeName: "हिन्दी", name: "Hindi", dir: "ltr" },
  { code: "es", nativeName: "Español", name: "Spanish", dir: "ltr" },
  { code: "fr", nativeName: "Français", name: "French", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", name: "German", dir: "ltr" },
  { code: "pt", nativeName: "Português", name: "Portuguese", dir: "ltr" },
  { code: "ru", nativeName: "Русский", name: "Russian", dir: "ltr" },
  { code: "ar", nativeName: "العربية", name: "Arabic", dir: "rtl" },
  { code: "bn", nativeName: "বাংলা", name: "Bengali", dir: "ltr" },
  { code: "zh-CN", nativeName: "中文", name: "Chinese", dir: "ltr" },
  { code: "ja", nativeName: "日本語", name: "Japanese", dir: "ltr" },
  { code: "ko", nativeName: "한국어", name: "Korean", dir: "ltr" },
  { code: "tr", nativeName: "Türkçe", name: "Turkish", dir: "ltr" },
  { code: "it", nativeName: "Italiano", name: "Italian", dir: "ltr" },
  { code: "id", nativeName: "Bahasa Indonesia", name: "Indonesian", dir: "ltr" },
  { code: "ta", nativeName: "தமிழ்", name: "Tamil", dir: "ltr" },
  { code: "te", nativeName: "తెలుగు", name: "Telugu", dir: "ltr" },
  { code: "ml", nativeName: "മലയാളം", name: "Malayalam", dir: "ltr" },
  { code: "gu", nativeName: "ગુજરાતી", name: "Gujarati", dir: "ltr" },
  { code: "kn", nativeName: "ಕನ್ನಡ", name: "Kannada", dir: "ltr" },
  { code: "pa", nativeName: "ਪੰਜਾਬੀ", name: "Punjabi", dir: "ltr" },
  { code: "ur", nativeName: "اردو", name: "Urdu", dir: "rtl" }
];

const tutorials = [
  {
    id: "youtube-hd",
    tag: "YouTube",
    title: "How to Download YouTube Videos, Shorts and MP3 in HD",
    intro: "Use the YouTube downloader when you want MP4 video, Shorts, MP3 audio, or HD quality from a public YouTube link.",
    steps: ["Open YouTube and copy the video or Shorts link.", "Visit SnapVideoHub and paste the copied URL into the download box.", "Click Download Now to analyze the link.", "Choose MP4 Video, MP3 Audio, HD, Full HD, or 4K if available.", "Click Save after the backend returns the selected file option."],
    notes: ["Private, age-restricted, removed, or region-blocked videos may not be available.", "Use only content you have permission to download."]
  },
  {
    id: "youtube-thumbnail",
    tag: "YouTube",
    title: "How to Save YouTube Thumbnails in Original Quality",
    intro: "The thumbnail option is useful when you need a public video's preview image for reference, study, or personal organization.",
    steps: ["Copy the YouTube video link.", "Open the YouTube page in SnapVideoHub.", "Paste the URL and choose Thumbnail.", "Select HD or original resolution when available.", "Download the thumbnail image."],
    notes: ["Original thumbnail sizes depend on what YouTube provides for that video."]
  },
  {
    id: "youtube-fixes",
    tag: "Troubleshooting",
    title: "Why Cannot I Download YouTube Videos? Common Fixes",
    intro: "A YouTube link can fail for several normal reasons. Most issues are caused by the URL, privacy settings, region restrictions, or temporary processing errors.",
    steps: ["Refresh the page and paste the URL again.", "Re-copy the link from the Share button.", "Try another browser or disable a VPN temporarily.", "Check that the video is public and still available.", "Try a lower quality if your network is unstable."],
    notes: ["SnapVideoHub never asks for your YouTube password or private account access."]
  },
  {
    id: "instagram-reels",
    tag: "Instagram",
    title: "How to Download Instagram Reels, Stories and Photos",
    intro: "The Instagram downloader handles public Reels, stories, posts, carousel media, videos, and photos.",
    steps: ["Open Instagram and copy the Reel, Story, Post, or Photo link.", "Open SnapVideoHub Instagram Downloader.", "Paste the Instagram URL.", "Choose video or image quality.", "Click download and save the file."],
    notes: ["Public content works best. Private account content may be unavailable."]
  },
  {
    id: "instagram-hd",
    tag: "Instagram",
    title: "How to Save Instagram Videos in HD Quality",
    intro: "SnapVideoHub prepares the best available Instagram quality from the public source link.",
    steps: ["Use the original Instagram post or Reel link.", "Paste the link into the Instagram downloader.", "Wait for available quality choices.", "Select HD when it appears.", "Save the file to your device."],
    notes: ["For best quality, keep your internet stable and use the original post link."]
  },
  {
    id: "tiktok-watermark",
    tag: "TikTok",
    title: "How to Download TikTok Videos Without Watermark",
    intro: "TikTok pages can expose different options depending on the source. SnapVideoHub prepares a no-watermark choice when available and allowed.",
    steps: ["Copy the TikTok video link.", "Paste it into SnapVideoHub TikTok Downloader.", "Select No Watermark if the option is available.", "Choose HD video when possible.", "Download the prepared file."],
    notes: ["Respect creators and use no-watermark downloads only when you have the right to do so."]
  },
  {
    id: "tiktok-audio",
    tag: "TikTok",
    title: "How to Download TikTok Sounds and Audio Files",
    intro: "Choose MP3 Audio when you only need the sound from a public TikTok video.",
    steps: ["Copy the TikTok video URL.", "Paste the link into SnapVideoHub.", "Choose MP3 Audio.", "Pick an audio quality level.", "Download the TikTok sound file."],
    notes: ["Audio output quality depends on the original source."]
  },
  {
    id: "facebook-reels",
    tag: "Facebook",
    title: "How to Download Facebook Videos and Reels Easily",
    intro: "The Facebook page supports public videos, Reels, clips, post media, and thumbnails.",
    steps: ["Open the Facebook video or Reel.", "Copy the post or video link.", "Paste it into SnapVideoHub.", "Choose the video quality.", "Click download."],
    notes: ["Private groups, login-only videos, and restricted posts may not return files."]
  },
  {
    id: "x-gif",
    tag: "X Twitter",
    title: "How to Download X Twitter Videos and GIFs",
    intro: "Use this guide for public posts on X or Twitter that include videos, GIFs, or media attachments.",
    steps: ["Copy the post URL.", "Open SnapVideoHub X Twitter Downloader.", "Paste the link.", "Choose MP4 or GIF format.", "Download instantly once the media is prepared."],
    notes: ["Some posts include multiple media items, so check every result option."]
  },
  {
    id: "whatsapp-status",
    tag: "WhatsApp",
    title: "How to Download WhatsApp Status Videos and Photos",
    intro: "WhatsApp status media is often local to your device, so use only media you are allowed to save and avoid private chats.",
    steps: ["Open the WhatsApp status or media workflow.", "Copy or prepare the media link when available.", "Use SnapVideoHub WhatsApp Downloader.", "Choose photo or video output.", "Download directly to your device."],
    notes: ["Do not upload private chat data or sensitive personal media."]
  },
  {
    id: "telegram-media",
    tag: "Telegram",
    title: "How to Save Telegram Videos and Media Files",
    intro: "Telegram public channel links can be used for videos, files, images, and document media.",
    steps: ["Copy the Telegram public post URL.", "Paste it into SnapVideoHub.", "Select video, image, or file format.", "Choose quality if available.", "Download securely."],
    notes: ["Private chats and restricted content are not supported."]
  },
  {
    id: "reddit-audio",
    tag: "Reddit",
    title: "How to Download Reddit Videos with Audio",
    intro: "Reddit often separates video and audio. SnapVideoHub prepares a merged output when the source allows it.",
    steps: ["Copy the Reddit post URL.", "Paste it into SnapVideoHub.", "Wait for video and audio detection.", "Choose the merged video with audio option.", "Download the HD Reddit video."],
    notes: ["If a post has no audio track, only silent video may be available."]
  },
  {
    id: "pinterest-media",
    tag: "Pinterest",
    title: "How to Download Pinterest Videos and Images",
    intro: "Pinterest pins can be images, videos, idea pins, or mixed media posts.",
    steps: ["Open the Pinterest Pin.", "Copy the Pin URL.", "Paste the link into SnapVideoHub.", "Choose image or video output.", "Download in HD when available."],
    notes: ["The available download type depends on the Pin source."]
  },
  {
    id: "snapchat-spotlight",
    tag: "Snapchat",
    title: "How to Download Snapchat Spotlight Videos",
    intro: "Use the Snapchat page for public Spotlight links and public story-style media.",
    steps: ["Copy the Snapchat Spotlight link.", "Open SnapVideoHub Snapchat Downloader.", "Paste the URL.", "Choose HD video.", "Download the prepared video."],
    notes: ["Private or app-only Snapchat content may not be available."]
  },
  {
    id: "threads-media",
    tag: "Threads",
    title: "How to Download Threads Videos and Photos",
    intro: "Threads posts can include videos, photos, and other media from public posts.",
    steps: ["Copy the Threads post link.", "Paste it into SnapVideoHub.", "Choose photo or video option.", "Review available results.", "Save media instantly."],
    notes: ["Public post links give the best results."]
  },
  {
    id: "twitch-clips",
    tag: "Twitch",
    title: "How to Download Twitch Clips and Stream Videos",
    intro: "Use Twitch pages for clips, VODs, stream highlights, and available quality levels.",
    steps: ["Copy the Twitch clip, stream, or VOD URL.", "Paste it into SnapVideoHub.", "Choose video quality.", "Select clip, stream, or VOD output.", "Download the video."],
    notes: ["Long VODs can take more time to process."]
  },
  {
    id: "discord-attachments",
    tag: "Discord",
    title: "How to Save Discord Attachments, GIFs and Videos",
    intro: "Discord attachments usually work best when you paste a direct media or CDN link.",
    steps: ["Copy the Discord media link.", "Paste it into SnapVideoHub.", "Choose file format.", "Check that the link has not expired.", "Download the attachment securely."],
    notes: ["Private server media can expire or require permissions."]
  },
  {
    id: "linkedin-video",
    tag: "LinkedIn",
    title: "How to Download LinkedIn Videos Online",
    intro: "Use LinkedIn pages for public post videos, business clips, learning posts, and media previews.",
    steps: ["Copy the LinkedIn post URL.", "Paste it into SnapVideoHub.", "Click Download Now.", "Choose MP4 or available quality.", "Save the MP4 video."],
    notes: ["Login-restricted media may not be available."]
  },
  {
    id: "dailymotion-hd",
    tag: "Dailymotion",
    title: "How to Download Dailymotion Videos in HD",
    intro: "Dailymotion pages prepare MP4 and quality options from public video links.",
    steps: ["Copy the Dailymotion video link.", "Paste it into SnapVideoHub.", "Select HD quality.", "Choose MP4.", "Download instantly."],
    notes: ["Available quality depends on the source upload."]
  },
  {
    id: "soundcloud-audio",
    tag: "Audio",
    title: "How to Download SoundCloud Audio and Podcasts",
    intro: "Use the MP3 workflow for public audio and podcast links when support is connected.",
    steps: ["Copy the SoundCloud track URL.", "Paste it into SnapVideoHub.", "Choose MP3 format.", "Select audio quality.", "Download the audio file."],
    notes: ["Only download audio you have rights to save."]
  },
  {
    id: "vk-media",
    tag: "VK",
    title: "How to Download VK Videos and Music Files",
    intro: "The same paste-and-format workflow can support VK media when the backend connector is enabled.",
    steps: ["Copy the VK media URL.", "Paste it into SnapVideoHub.", "Select video or audio.", "Choose quality.", "Download instantly."],
    notes: ["Private or login-restricted content may not work."]
  },
  {
    id: "okru-video",
    tag: "OK.ru",
    title: "How to Download OK.ru Videos Easily",
    intro: "Use this workflow for public OK.ru video links after platform support is connected.",
    steps: ["Copy the OK.ru video link.", "Paste it into SnapVideoHub.", "Choose quality.", "Select MP4.", "Download HD video."],
    notes: ["Quality choices depend on the source video."]
  },
  {
    id: "bilibili-hd",
    tag: "Bilibili",
    title: "How to Download Bilibili Videos in HD Quality",
    intro: "Bilibili HD output depends on the source video and connector availability.",
    steps: ["Copy the Bilibili video URL.", "Paste it into SnapVideoHub.", "Select HD quality.", "Choose MP4.", "Save the video instantly."],
    notes: ["Some content may require regional or account access and may not be available."]
  },
  {
    id: "xiaohongshu-watermark",
    tag: "Xiaohongshu",
    title: "How to Download Xiaohongshu Videos Without Watermark",
    intro: "Use no-watermark choices only when the source and permissions allow it.",
    steps: ["Copy the Xiaohongshu post URL.", "Paste the link into SnapVideoHub.", "Choose Without Watermark.", "Select HD content.", "Download the file."],
    notes: ["Respect creator rights and local platform rules."]
  },
  {
    id: "safari-iphone",
    tag: "iPhone",
    title: "How to Save Safari Downloads to Photos on iPhone",
    intro: "After downloading in Safari, iPhone users often need to move files from Files into Photos.",
    steps: ["Download media using Safari.", "Open the Files app.", "Locate the downloaded file.", "Tap Share.", "Choose Save Image or Save Video.", "Open Photos to confirm the media appears."],
    notes: ["If the option is missing, check the file type and iOS permissions."]
  },
  {
    id: "formats",
    tag: "Formats",
    title: "Best Video Formats: MP4 vs MP3 vs WEBM",
    intro: "Choose a format based on how you plan to use the file.",
    steps: ["Choose MP4 for universal video playback.", "Choose MP3 for music, podcasts, and audio-only files.", "Choose WEBM for smaller files and modern browser use.", "Choose thumbnails or images when you only need visuals."],
    notes: ["MP4 is usually the safest choice for phones, computers, and social editing apps."]
  },
  {
    id: "mobile-speed",
    tag: "Mobile",
    title: "How to Download Videos Faster on Mobile Devices",
    intro: "Mobile speed depends on your connection, device storage, browser, and selected quality.",
    steps: ["Use strong WiFi or a stable mobile connection.", "Close background apps.", "Use the latest browser version.", "Clear browser cache when pages feel slow.", "Choose lower quality if your internet is weak."],
    notes: ["Large 4K files take more time and storage space."]
  },
  {
    id: "safety",
    tag: "Safety",
    title: "Is SnapVideoHub Safe to Use?",
    intro: "SnapVideoHub is designed around a simple public-link workflow without asking for private credentials.",
    steps: ["Paste only public media links.", "Never enter social media passwords.", "Avoid suspicious third-party popups.", "Use HTTPS browsing.", "Download content legally and responsibly."],
    notes: ["The website should never request private messages, payment details, or account passwords."]
  },
  {
    id: "devices",
    tag: "Devices",
    title: "How to Use SnapVideoHub on Android, iPhone and PC",
    intro: "The downloader layout is responsive and works across common devices.",
    steps: ["Android users can open Chrome and use SnapVideoHub normally.", "iPhone users can use Safari for downloading media.", "PC and laptop users can use Chrome, Edge, Firefox, or another modern browser.", "Paste the URL, choose format, and save the prepared file."],
    notes: ["Browser download locations vary by device."]
  },
  {
    id: "beginner-guide",
    tag: "Beginner",
    title: "Beginner Guide to Online Video Downloaders",
    intro: "Online downloaders help users save public videos, audio, images, and media files without installing software.",
    steps: ["Copy a public media link from a supported platform.", "Paste it into the downloader box.", "Choose the platform, format, and quality.", "Wait for available options.", "Save the file to your device."],
    notes: ["Benefits include fast access, cross-device support, cloud processing, and multiple format choices."]
  }
];

const legalDocs = {
  privacy: {
    label: "Privacy Policy",
    title: "Privacy Policy for SnapVideoHub",
    intro: "Protecting user privacy and maintaining a secure browsing experience is a high priority for SnapVideoHub.",
    sections: [
      ["Information We Collect", ["Browser type and version", "Operating system", "Device type", "IP address", "Language preferences", "Referral source", "Website usage statistics"]],
      ["Cookies and Tracking Technologies", ["Improve website functionality", "Save user preferences", "Analyze traffic and performance", "Display relevant advertisements where enabled"]],
      ["Third-Party Services", ["Google Analytics", "Google AdSense", "Cloud hosting providers", "CDN and security services"]],
      ["Media Processing", ["SnapVideoHub processes media links temporarily through secure cloud systems to generate downloadable options.", "We do not permanently store downloaded videos, audio, images, or personal user content on our servers."]],
      ["What We Do Not Collect", ["Social media passwords", "Private account credentials", "Personal payment information", "Private messages or chats"]],
      ["Data Security", ["We use standard security practices and encrypted infrastructure to reduce unauthorized access, abuse, and malicious activity."]],
      ["Children's Privacy", ["SnapVideoHub is not intended for children under 13 years old and does not knowingly collect personal information from children."]],
      ["Copyright Responsibility", ["Users are responsible for ensuring downloaded content complies with copyright laws and platform terms."]],
      ["Contact", ["privacy@snapvideohub.com"]]
    ]
  },
  terms: {
    label: "Terms of Service",
    title: "Terms and Conditions for SnapVideoHub",
    intro: "By accessing or using SnapVideoHub, users agree to comply with these terms of service.",
    sections: [
      ["Service Description", ["SnapVideoHub is a free online video downloader and media downloading platform for publicly accessible media from supported platforms."]],
      ["Usage Rules", ["Use SnapVideoHub only for lawful purposes and download only content you own or are legally authorized to access."]],
      ["Intellectual Property", ["Third-party content belongs to its respective owners. SnapVideoHub does not claim ownership of downloaded content."]],
      ["Disclaimer", ["SnapVideoHub is provided as is and as available without warranties of any kind."]],
      ["Limitation of Liability", ["SnapVideoHub is not responsible for user misuse, copyright violations, third-party platform changes, data loss, or interruptions."]],
      ["Indemnification", ["Users agree to defend and hold SnapVideoHub harmless from claims arising from misuse of the service."]],
      ["Service Changes and Termination", ["SnapVideoHub may modify, suspend, limit, or discontinue any part of the service at any time."]],
      ["Privacy", ["Your use of SnapVideoHub is also governed by our Privacy Policy."]]
    ],
    content: [
      {
        heading: "1. Service Description",
        sections: [
          {
            heading: "1.1 Service Content",
            paragraphs: [
              "SnapVideoHub is a free online video downloader and media downloading platform that allows users to download publicly accessible videos, reels, shorts, stories, MP3 audio, thumbnails, GIFs, photos, and other media from supported social media and media-sharing platforms.",
              "SnapVideoHub provides fast, secure, and cloud-based downloading tools for users worldwide without requiring software installation or account registration."
            ]
          },
          {
            heading: "1.2 Service Features",
            list: [
              "Completely free to use",
              "No registration or login required",
              "Supports HD, Full HD, 2K, and 4K downloads",
              "Fast cloud-based processing technology",
              "Mobile, tablet, and desktop compatible",
              "Supports multiple video and audio formats",
              "Does not permanently store user download history",
              "Supports videos, reels, shorts, stories, MP3 audio, thumbnails, GIFs, and images",
              "Works on Chrome, Safari, Firefox, Edge, Opera, and modern browsers"
            ]
          },
          {
            heading: "1.3 Supported Platforms",
            paragraphs: ["SnapVideoHub supports downloading publicly accessible media from supported platforms including:"],
            list: ["YouTube", "Instagram", "TikTok", "Facebook", "X Twitter", "Reddit", "Pinterest", "Telegram", "WhatsApp", "Threads", "Twitch", "Discord", "LinkedIn", "Dailymotion"],
            footer: "Platform availability may change over time depending on third-party platform updates and restrictions."
          }
        ]
      },
      {
        heading: "2. Usage Rules",
        sections: [
          {
            heading: "2.1 Lawful Use",
            paragraphs: ["By using SnapVideoHub, you agree to:"],
            list: [
              "Use the Service only for lawful purposes",
              "Comply with applicable local, national, and international laws",
              "Respect copyright and intellectual property rights",
              "Download only content you own or are legally authorized to access",
              "Use downloaded content responsibly and ethically"
            ],
            footer: "Users are solely responsible for ensuring they have permission to download and use media content."
          },
          {
            heading: "2.2 Prohibited Actions",
            paragraphs: ["You must not:"],
            list: [
              "Download copyrighted content without authorization",
              "Use the Service for illegal activities",
              "Attempt unauthorized access to the platform",
              "Abuse servers or use automated bots excessively",
              "Remove copyright notices or ownership information",
              "Redistribute downloaded content illegally",
              "Upload malicious software or harmful code",
              "Violate privacy, intellectual property, or legal rights of others"
            ]
          },
          {
            heading: "2.3 Personal Use",
            paragraphs: ["SnapVideoHub is intended primarily for personal and non-commercial use.", "We strongly recommend users:"],
            list: [
              "Obtain permission before sharing downloaded content",
              "Follow source platform terms of service",
              "Respect creator rights and platform policies"
            ]
          }
        ]
      },
      {
        heading: "3. Intellectual Property",
        sections: [
          {
            heading: "3.1 Third-Party Content",
            paragraphs: [
              "All copyrights, trademarks, and intellectual property rights related to downloaded content belong to their respective owners and creators.",
              "SnapVideoHub does not claim ownership of third-party content.",
              "Users are fully responsible for how downloaded content is used."
            ]
          },
          {
            heading: "3.2 Platform Content",
            paragraphs: [
              "The SnapVideoHub website, including design, branding, code, text, graphics, and platform features, is protected by intellectual property and copyright laws.",
              "You may not copy, distribute, modify, or reproduce platform content without written permission."
            ]
          }
        ]
      },
      {
        heading: "4. Disclaimer",
        sections: [
          {
            heading: "4.1 Service Provided As Is",
            paragraphs: ["SnapVideoHub is provided on an as is and as available basis without warranties of any kind.", "We do not guarantee:"],
            list: [
              "Uninterrupted service",
              "Error-free operation",
              "Continuous platform compatibility",
              "Permanent content availability"
            ]
          },
          {
            heading: "4.2 Content Disclaimer",
            paragraphs: ["SnapVideoHub does not host or permanently store third-party media files.", "We are not responsible for:"],
            list: [
              "Accuracy of downloaded content",
              "Availability of source media",
              "Changes made by third-party platforms",
              "User misuse of downloaded content"
            ]
          },
          {
            heading: "4.3 Third-Party Platforms",
            paragraphs: [
              "SnapVideoHub is not affiliated with, endorsed by, or officially connected to third-party social media platforms.",
              "All trademarks and platform names belong to their respective owners."
            ]
          }
        ]
      },
      {
        heading: "5. Limitation of Liability",
        sections: [
          {
            paragraphs: ["To the maximum extent permitted by applicable law:"],
            list: [
              "SnapVideoHub shall not be liable for direct, indirect, incidental, or consequential damages",
              "We are not responsible for data loss, business interruption, or service interruptions",
              "Users assume full responsibility for downloaded content and usage"
            ],
            footer: "The Service is provided free of charge and without liability guarantees."
          }
        ]
      },
      {
        heading: "6. Indemnification",
        sections: [
          {
            paragraphs: ["By using SnapVideoHub, you agree to defend, indemnify, and hold harmless SnapVideoHub, its affiliates, employees, and partners from any claims, liabilities, damages, losses, or legal expenses arising from:"],
            list: [
              "Violation of these Terms",
              "Misuse of the Service",
              "Infringement of third-party rights",
              "Illegal use of downloaded content"
            ]
          }
        ]
      },
      {
        heading: "7. Service Changes and Termination",
        sections: [
          {
            heading: "7.1 Service Modification",
            paragraphs: ["SnapVideoHub reserves the right to modify, suspend, limit, or discontinue any part of the Service at any time without prior notice."]
          },
          {
            heading: "7.2 Termination of Use",
            paragraphs: ["We may restrict or terminate access to the Service for users who:"],
            list: [
              "Violate these Terms",
              "Abuse platform resources",
              "Engage in illegal or harmful activities",
              "Attempt unauthorized access or attacks"
            ]
          }
        ]
      },
      {
        heading: "8. Privacy",
        sections: [
          {
            paragraphs: [
              "Your use of SnapVideoHub is also governed by our Privacy Policy.",
              "SnapVideoHub respects user privacy and does not require passwords, private social media credentials, or unnecessary personal information.",
              "All website traffic is protected using secure HTTPS encryption technology."
            ]
          }
        ]
      }
    ]
  },
  dmca: {
    label: "DMCA",
    title: "DMCA Copyright Policy for SnapVideoHub",
    intro: "SnapVideoHub respects intellectual property rights and responds to valid copyright complaints.",
    sections: [
      ["Filing a DMCA Complaint", ["Full legal name", "Contact email", "Copyright ownership proof", "URL of copyrighted content", "Description of the issue", "Good faith statement", "Signature or authorized confirmation"]],
      ["DMCA Contact", ["dmca@snapvideohub.com"]],
      ["Review Process", ["We review the request", "We investigate reported content", "We take necessary action when required"]],
      ["False Claims", ["Submitting false copyright claims may result in legal liability."]]
    ]
  },
  about: {
    label: "About Us",
    title: "About SnapVideoHub",
    intro: "SnapVideoHub is a modern cloud-based media downloading platform created to provide users with a fast, secure, and simple way to save online content from popular social media platforms.",
    sections: [
      ["Our Mission", ["Make media downloading accessible, fast, secure, and user-friendly for users worldwide."]],
      ["What Makes Us Different", ["Fast cloud technology", "Multi-platform support", "Privacy-focused design", "HD, Full HD, 2K, and 4K quality controls", "Simple mobile and desktop interface"]],
      ["Supported Platforms", platforms.map((platform) => platform.name)],
      ["Global Access", ["SnapVideoHub is designed for users worldwide with multilingual support and responsive performance across devices."]],
      ["Thank You", ["Thank you for choosing SnapVideoHub. We continue improving services to provide a better downloading experience."]]
    ]
  },
  contact: {
    label: "Contact",
    title: "Contact SnapVideoHub",
    intro: "We value feedback, support requests, business inquiries, platform suggestions, and copyright messages.",
    sections: [
      ["Support Information", ["General support: support@snapvideohub.com", "Business and partnerships: business@snapvideohub.com", "DMCA and copyright: dmca@snapvideohub.com", "Privacy questions: privacy@snapvideohub.com"]],
      ["Contact Form Details", ["Your name", "Email address", "Subject", "Detailed message"]],
      ["Common Reasons to Contact Us", ["Technical issues", "Download problems", "Feature requests", "Platform support suggestions", "Business partnerships", "Copyright concerns"]],
      ["Response Time", ["We aim to respond within 24 to 72 hours."]]
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applySavedLanguageShell();
  renderHeader();
  renderFooter();
  renderSearchModal();
  routePage();
  renderDownloaders();
  bindGlobalControls();
  initReveal();
  refreshIcons();
});

function routePage() {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderPlatformGrids();
    renderLanguageCloud();
  }
  if (page === "platform") {
    renderPlatformPage();
  }
  if (page === "tutorials") {
    renderTutorials();
  }
  if (page === "supported") {
    renderPlatformGrids();
    renderSupportMatrix();
  }
  if (page === "legal") {
    renderLegalPage();
  }
  if (page === "blog") {
    renderBlogGrid();
  }
}

function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;
  const currentPage = document.body.dataset.page;
  const currentPlatform = new URLSearchParams(location.search).get("platform") || "";
  const currentDoc = new URLSearchParams(location.search).get("doc") || "";
  const selectedLanguage = getSelectedLanguage();
  const links = [
    ["Home", "index.html", currentPage === "home"],
    ["YouTube Downloader", "platform.html?platform=youtube", currentPlatform === "youtube"],
    ["Instagram Downloader", "platform.html?platform=instagram", currentPlatform === "instagram"],
    ["TikTok Downloader", "platform.html?platform=tiktok", currentPlatform === "tiktok"],
    ["Facebook Downloader", "platform.html?platform=facebook", currentPlatform === "facebook"],
    ["MP3 Downloader", "platform.html?platform=mp3", currentPlatform === "mp3"],
    ["Tutorials", "tutorials.html", currentPage === "tutorials"],
    ["Supported Platforms", "supported-platforms.html", currentPage === "supported"],
    ["Chrome Extension", "extension.html", currentPage === "extension"],
    ["Blog", "blog.html", currentPage === "blog"],
    ["Contact", "legal.html?doc=contact", currentDoc === "contact"]
  ];

  mount.innerHTML = `
    <header class="site-header">
      <div class="nav-shell">
        <a class="brand-link" href="index.html" aria-label="SnapVideoHub home">
          <img src="assets/logo-wide.png" alt="SnapVideoHub">
        </a>
        <nav class="nav-menu" aria-label="Main navigation">
          ${links.map(([label, href, active]) => `<a class="nav-link${active ? " active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <div class="language-wrap notranslate" translate="no">
            <button class="icon-btn notranslate" type="button" data-language-toggle aria-label="Language: ${escapeHtml(languageDisplayName(selectedLanguage))}" title="Language: ${escapeHtml(languageDisplayName(selectedLanguage))}" translate="no"><i data-lucide="languages"></i></button>
            <div class="language-menu notranslate" data-language-menu translate="no" hidden>
              ${languages.map((language) => `
                <button class="notranslate" type="button" data-language-option="${language.code}" lang="${language.code}" dir="${language.dir}" translate="no" aria-pressed="${language.code === selectedLanguage.code ? "true" : "false"}">
                  <span class="notranslate" translate="no">${escapeHtml(language.nativeName)}</span>
                  <small class="notranslate" translate="no">${escapeHtml(language.name)}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <button class="icon-btn" type="button" data-theme-toggle aria-label="Dark mode" title="Dark mode"><i data-lucide="moon"></i></button>
          <button class="icon-btn" type="button" data-search-open aria-label="Search" title="Search"><i data-lucide="search"></i></button>
          <button class="icon-btn mobile-toggle" type="button" data-mobile-toggle aria-label="Menu" title="Menu"><i data-lucide="menu"></i></button>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;
  const serviceLinks = platforms.map((platform) => `<li><a href="platform.html?platform=${platform.slug}">${platform.title}</a></li>`).join("");
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-shell">
        <div class="footer-main">
          <div class="footer-col">
            <h2>Our Services</h2>
            <ul>${serviceLinks}</ul>
          </div>
          <div class="footer-brand">
            <img src="assets/logo-wide.png" alt="SnapVideoHub">
            <p>Free online video downloader for videos, reels, shorts, stories, MP3, GIFs, thumbnails, and photos.</p>
          </div>
          <div class="footer-col">
            <h2>Company</h2>
            <ul>
              <li><a href="legal.html?doc=privacy">Privacy Policy</a></li>
              <li><a href="legal.html?doc=terms">Terms of Service</a></li>
              <li><a href="legal.html?doc=dmca">DMCA</a></li>
              <li><a href="legal.html?doc=about">About Us</a></li>
              <li><a href="legal.html?doc=contact">Contact</a></li>
              <li><a href="tutorials.html">Tutorials</a></li>
              <li><a href="supported-platforms.html">Supported Platforms</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 SnapVideoHub - All Rights Reserved</span>
          <div class="footer-links">
            <a href="legal.html?doc=privacy">Privacy Policy</a>
            <a href="legal.html?doc=terms">Terms</a>
            <a href="legal.html?doc=contact">Contact</a>
            <a href="legal.html?doc=dmca">DMCA</a>
            <a href="legal.html?doc=about">About</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderSearchModal() {
  const mount = document.querySelector("[data-search-modal]");
  if (!mount) return;
  mount.innerHTML = `
    <div class="search-modal" data-search-modal-inner hidden>
      <div class="search-box" role="dialog" aria-modal="true" aria-label="Search SnapVideoHub">
        <div class="search-head">
          <input class="text-input" type="search" data-search-input placeholder="Search platform, tutorial, policy...">
          <button class="icon-btn" type="button" data-search-close aria-label="Close search"><i data-lucide="x"></i></button>
        </div>
        <div class="search-results" data-search-results></div>
      </div>
    </div>
  `;
}

function bindGlobalControls() {
  document.querySelector("[data-mobile-toggle]")?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("nav-open"));
  });

  bindLanguageControls();

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("snapvideohub-theme", next);
    updateThemeIcon();
  });

  const modal = document.querySelector("[data-search-modal-inner]");
  const input = document.querySelector("[data-search-input]");
  const results = document.querySelector("[data-search-results]");
  const openSearch = () => {
    modal.hidden = false;
    input.value = "";
    renderSearchResults("", results);
    setTimeout(() => input.focus(), 20);
  };
  document.querySelector("[data-search-open]")?.addEventListener("click", openSearch);
  document.querySelector("[data-search-close]")?.addEventListener("click", () => {
    modal.hidden = true;
  });
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) modal.hidden = true;
  });
  input?.addEventListener("input", () => renderSearchResults(input.value, results));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) modal.hidden = true;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.matches("[data-contact-form]")) {
      event.preventDefault();
      submitContactForm(event.target);
    }
  });

  bindLegalNavigation();
}

function bindLegalNavigation() {
  if (document.body.dataset.page !== "legal") return;

  document.addEventListener("click", (event) => {
    const link = event.target.closest(".legal-tabs a");
    if (!link) return;

    const nextUrl = new URL(link.href, location.href);
    if (nextUrl.pathname !== location.pathname) return;

    event.preventDefault();
    const previousY = window.scrollY;
    history.pushState({ doc: nextUrl.searchParams.get("doc") || "privacy" }, "", nextUrl.href);
    renderLegalPage();
    initReveal();
    refreshIcons();
    window.scrollTo({ top: previousY, left: 0, behavior: "auto" });
  });

  window.addEventListener("popstate", () => {
    renderLegalPage();
    initReveal();
    refreshIcons();
  });
}

function bindLanguageControls() {
  const languageToggle = document.querySelector("[data-language-toggle]");
  const languageMenu = document.querySelector("[data-language-menu]");
  const languageWrap = document.querySelector(".language-wrap");
  const selectedLanguage = getSelectedLanguage();

  applyLanguageShell(selectedLanguage);
  updateLanguageButtons(selectedLanguage.code);

  if (selectedLanguage.code !== "en") {
    loadGoogleTranslate(selectedLanguage.code);
  }

  languageToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (languageMenu) languageMenu.hidden = !languageMenu.hidden;
  });

  languageMenu?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language-option]");
    if (!button) return;
    selectLanguage(button.dataset.languageOption);
  });

  document.addEventListener("click", (event) => {
    if (languageMenu && !languageMenu.hidden && !languageWrap?.contains(event.target)) {
      languageMenu.hidden = true;
    }
  });
}

function selectLanguage(code) {
  const language = getLanguageByCode(code);
  const languageMenu = document.querySelector("[data-language-menu]");

  localStorage.setItem(LANGUAGE_STORAGE_KEY, language.code);
  applyLanguageShell(language);
  updateLanguageButtons(language.code);
  if (languageMenu) languageMenu.hidden = true;

  if (language.code === "en") {
    clearGoogleTranslateCookie();
    showToast("Language changed to English.");
    if (isGoogleTranslated()) {
      setTimeout(() => location.reload(), 350);
    }
    return;
  }

  setGoogleTranslateCookie(language.code);
  showToast(`Language changed to ${languageDisplayName(language)}.`);
  loadGoogleTranslate(language.code);
}

function applySavedLanguageShell() {
  applyLanguageShell(getSelectedLanguage());
}

function applyLanguageShell(language) {
  const selected = language || languages[0];
  document.documentElement.lang = selected.code;
  document.documentElement.dir = selected.dir || "ltr";
}

function updateLanguageButtons(code) {
  const language = getLanguageByCode(code);
  const label = `Language: ${languageDisplayName(language)}`;
  const toggle = document.querySelector("[data-language-toggle]");

  toggle?.setAttribute("aria-label", label);
  toggle?.setAttribute("title", label);

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageOption === language.code));
  });
}

function getSelectedLanguage() {
  return getLanguageByCode(localStorage.getItem(LANGUAGE_STORAGE_KEY) || getGoogleTranslateCookieLanguage() || "en");
}

function getLanguageByCode(code) {
  return languages.find((language) => language.code === code) || languages[0];
}

function languageDisplayName(language) {
  const selected = language || languages[0];
  return selected.nativeName === selected.name ? selected.name : `${selected.nativeName} (${selected.name})`;
}

function getGoogleTranslateCookieLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return "";
  const value = decodeURIComponent(match[1]);
  return value.split("/")[2] || "";
}

function loadGoogleTranslate(languageCode) {
  const language = getLanguageByCode(languageCode);
  if (language.code === "en") return;

  setGoogleTranslateCookie(language.code);
  ensureGoogleTranslateMount();
  window.googleTranslateTargetLanguage = language.code;
  window.googleTranslateElementInit = () => {
    const translateApi = window.google?.translate;
    if (!translateApi?.TranslateElement) return;

    new translateApi.TranslateElement({
      pageLanguage: "en",
      includedLanguages: languages.filter((item) => item.code !== "en").map((item) => item.code).join(","),
      autoDisplay: false
    }, GOOGLE_TRANSLATE_ELEMENT_ID);
    waitForGoogleTranslateCombo(window.googleTranslateTargetLanguage);
  };

  if (document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) {
    if (!document.querySelector(".goog-te-combo")) {
      window.googleTranslateElementInit();
    }
    waitForGoogleTranslateCombo(language.code);
    return;
  }

  const script = document.createElement("script");
  script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  script.onerror = () => showToast("Translation service could not load. Check your internet connection.");
  document.body.appendChild(script);
}

function ensureGoogleTranslateMount() {
  let mount = document.getElementById(GOOGLE_TRANSLATE_ELEMENT_ID);
  if (mount) return mount;

  mount = document.createElement("div");
  mount.id = GOOGLE_TRANSLATE_ELEMENT_ID;
  mount.className = "google-translate-mount notranslate";
  mount.setAttribute("aria-hidden", "true");
  mount.setAttribute("translate", "no");
  document.body.appendChild(mount);
  return mount;
}

function waitForGoogleTranslateCombo(languageCode, attempt = 0) {
  const combo = document.querySelector(".goog-te-combo");
  if (combo) {
    combo.value = languageCode;
    combo.dispatchEvent(new Event("change"));
    return;
  }

  if (attempt < 30) {
    setTimeout(() => waitForGoogleTranslateCombo(languageCode, attempt + 1), 250);
  }
}

function setGoogleTranslateCookie(languageCode) {
  writeGoogleTranslateCookie(`/en/${languageCode}`);
}

function clearGoogleTranslateCookie() {
  expireGoogleTranslateCookie();
}

function writeGoogleTranslateCookie(value) {
  document.cookie = `googtrans=${value}; path=/`;
  const hostname = location.hostname;
  if (canUseDomainCookie(hostname)) {
    document.cookie = `googtrans=${value}; path=/; domain=.${hostname}`;
  }
}

function expireGoogleTranslateCookie() {
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  const hostname = location.hostname;
  if (canUseDomainCookie(hostname)) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${hostname}`;
  }
}

function canUseDomainCookie(hostname) {
  return Boolean(hostname && hostname.includes(".") && !/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname));
}

function isGoogleTranslated() {
  const translatedClass = `${document.documentElement.className} ${document.body.className}`;
  return translatedClass.includes("translated") || Boolean(document.querySelector(".goog-te-combo"));
}

function applyTheme() {
  const stored = localStorage.getItem("snapvideohub-theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = stored || (prefersDark ? "dark" : "light");
}

function updateThemeIcon() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;
  const dark = document.documentElement.dataset.theme === "dark";
  toggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
  refreshIcons();
}

function renderDownloaders() {
  document.querySelectorAll("[data-downloader]").forEach((mount) => {
    const defaultPlatform = mount.dataset.defaultPlatform || "auto";
    renderDownloader(mount, defaultPlatform);
  });
}

function renderDownloader(mount, defaultPlatform = "auto") {
  const options = [
    `<option value="auto"${defaultPlatform === "auto" ? " selected" : ""}>Auto Detect</option>`,
    ...allTools.map((platform) => `<option value="${platform.slug}"${defaultPlatform === platform.slug ? " selected" : ""}>${platform.name}</option>`)
  ].join("");
  mount.innerHTML = `
    <form class="download-panel" data-downloader-form>
      <div class="download-grid">
        <div class="url-wrap">
          <input class="download-input" type="url" data-url-input placeholder="Paste Video URL Here..." aria-label="Paste video URL">
          <button class="icon-btn paste-btn" type="button" data-paste-url aria-label="Paste from clipboard" title="Paste"><i data-lucide="clipboard-paste"></i></button>
        </div>
        <select class="select-input" data-platform-select aria-label="Choose platform">${options}</select>
        <select class="select-input" data-quality-select aria-label="Choose resolution">
          <option value="auto">Best Available</option>
          <option value="4k">4K Quality</option>
          <option value="2k">2K Quality</option>
          <option value="1080p">Full HD 1080p</option>
          <option value="720p">HD 720p</option>
          <option value="audio-high">MP3 320 kbps</option>
          <option value="thumbnail">Original Thumbnail</option>
        </select>
      </div>
      <div class="download-actions">
        <div class="format-tabs" aria-label="Choose format">
          ${formatRadio("video", "Video", "video", true)}
          ${formatRadio("audio", "Audio", "music", false)}
          ${formatRadio("thumbnail", "Thumbnail", "image", false)}
          ${formatRadio("gif", "GIF", "film", false)}
        </div>
        <button class="btn btn-primary" type="submit"><i data-lucide="download"></i> Download Now</button>
      </div>
      <div class="result-panel" data-result-panel hidden></div>
      <p class="download-legal-note">
        Respect copyright. Only download or back up content you are authorized to keep. No infringement or illegal use.
        By using this service, you agree to the <a href="legal.html?doc=terms">Terms of Service</a>.
      </p>
    </form>
  `;
  bindDownloader(mount.querySelector("[data-downloader-form]"));
  refreshIcons();
}

function formatRadio(value, label, icon, checked) {
  return `
    <label>
      <input type="radio" name="format" value="${value}"${checked ? " checked" : ""}>
      <span><i data-lucide="${icon}"></i> ${label}</span>
    </label>
  `;
}

function bindDownloader(form) {
  if (!form) return;
  const input = form.querySelector("[data-url-input]");
  const platformSelect = form.querySelector("[data-platform-select]");
  const qualitySelect = form.querySelector("[data-quality-select]");
  const resultPanel = form.querySelector("[data-result-panel]");
  bindResultPanelScrollHandoff(resultPanel);
  form.querySelector("[data-paste-url]")?.addEventListener("click", async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        input.value = text;
        showToast("Link pasted into the download box.");
      }
    } catch {
      showToast("Clipboard permission is not available in this browser.");
    }
  });

  input.addEventListener("input", () => {
    const detected = detectTool(input.value);
    if (detected && platformSelect.value === "auto") {
      qualitySelect.value = detected.slug === "mp3" ? "audio-high" : qualitySelect.value;
    }
  });

  form.querySelectorAll('input[name="format"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      if (input.value.trim() && !resultPanel.hidden) {
        form.requestSubmit();
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const url = input.value.trim();
    if (!url) {
      showToast("Paste a public video, audio, image, or media URL first.");
      input.focus();
      return;
    }
    const selected = platformSelect.value === "auto" ? detectTool(url) : platformBySlug[platformSelect.value];
    const tool = selected || platformBySlug.youtube;
    const format = new FormData(form).get("format") || "video";
    const quality = qualitySelect.options[qualitySelect.selectedIndex].text;
    resultPanel.hidden = false;
    resultPanel.scrollTop = 0;
    resultPanel.innerHTML = loadingResultHtml(tool, format, quality);
    resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    refreshIcons();
    const progress = startResultProgress(resultPanel);

    try {
      const response = await fetch(`${API_BASE}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          platform: platformSelect.value,
          format,
          quality: qualitySelect.value
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "The backend could not analyze this link.");
      await finishResultProgress(progress);
      resultPanel.innerHTML = resultHtml(data, tool, format, quality);
      resultPanel.scrollTop = 0;
      bindResultPreviews(resultPanel);
    } catch (error) {
      stopResultProgress(progress);
      resultPanel.innerHTML = offlineResultHtml(tool, format, quality, error.message);
      resultPanel.scrollTop = 0;
    }
    refreshIcons();
  });
}

function loadingResultHtml(tool, format, quality) {
  return `
    <div class="result-topline">
      <strong>${tool.name}</strong>
      <span>Preparing ${formatLabel(format)}</span>
      <span>${quality}</span>
    </div>
    <div class="result-progress-card">
      <div class="progress-main">
        <span class="progress-spinner" aria-hidden="true"></span>
        <div>
          <strong>Preparing your download</strong>
          <p>Finding the video, thumbnail, and best quality options.</p>
        </div>
        <span class="progress-percent" data-progress-value>0%</span>
      </div>
      <div class="progress-track" aria-label="Preparing download progress"><span data-progress-bar></span></div>
      <div class="progress-steps">
        <span>Checking link</span>
        <span>Finding media</span>
        <span>Almost done</span>
      </div>
    </div>
  `;
}

function resultHtml(data, fallbackTool, format, quality) {
  const options = Array.isArray(data.options) ? data.options : [];
  const toolName = data.platformName || fallbackTool.name;
  const statusText = statusLabel(data.status);
  const cards = options.length
    ? options.map(resultCardHtml).join("")
    : `
      <div class="result-card result-card-wide">
        <strong><i data-lucide="alert-circle"></i> Try another public link</strong>
        <p>${escapeHtml(userFriendlyError(data.message))}</p>
        ${data.note ? `<p>${escapeHtml(data.note)}</p>` : ""}
        ${data.message ? `<details class="result-details"><summary>Technical reason</summary><p>${escapeHtml(data.message)}</p></details>` : ""}
      </div>
    `;
  const note = options.length
    ? "100% done. Preview the media here, or save the file to your device."
    : data.note || "Use a public video, reel, post, or direct media file link.";

  return `
    <div class="result-topline">
      <strong>${escapeHtml(toolName)}</strong>
      <span>${escapeHtml(statusText)}</span>
      <span>Requested: ${formatLabel(format)} / ${escapeHtml(quality)}</span>
    </div>
    ${options.length ? `<div class="result-ready-banner"><i data-lucide="check-circle-2"></i><strong>100% Ready</strong><span>Your download options are prepared.</span></div>` : ""}
    <div class="result-options">${cards}</div>
    <p class="result-note">${escapeHtml(note)}</p>
  `;
}

function resultCardHtml(option) {
  const icon = option.icon || "download";
  const label = option.label || "Download";
  const description = option.description || "Prepared media option.";
  const downloadUrl = absoluteApiUrl(option.downloadUrl);
  const previewUrl = absoluteApiUrl(option.previewUrl);
  const thumbnailUrl = absoluteApiUrl(option.thumbnailUrl);
  return `
    <div class="result-card">
      ${previewHtml(option, previewUrl, thumbnailUrl)}
      <strong><i data-lucide="${escapeHtml(icon)}"></i> ${escapeHtml(label)}</strong>
      <p>${escapeHtml(description)}</p>
      <a class="btn btn-primary result-download" href="${escapeHtml(downloadUrl)}" download><i data-lucide="download"></i> Save File</a>
    </div>
  `;
}

function previewHtml(option, previewUrl, thumbnailUrl) {
  const icon = option.icon || "";
  if (!previewUrl) return "";
  if (icon === "image") {
    return `<img class="result-preview-image" src="${escapeHtml(previewUrl)}" alt="${escapeHtml(option.label || "Media thumbnail")}" loading="lazy">`;
  }
  if (icon === "music") {
    return `<audio class="result-audio" controls preload="none" src="${escapeHtml(previewUrl)}"></audio>`;
  }
  if (icon === "video" || icon === "film" || icon === "download") {
    const cover = thumbnailUrl
      ? `<img src="${escapeHtml(thumbnailUrl)}" alt="" loading="lazy">`
      : `<span class="preview-empty"><i data-lucide="${icon === "film" ? "film" : "play"}"></i></span>`;
    return `
      <button class="result-preview-button" type="button" data-preview-button data-preview-kind="video" data-preview-url="${escapeHtml(previewUrl)}" aria-label="Play preview">
        ${cover}
        <span><i data-lucide="play"></i> Preview</span>
      </button>
    `;
  }
  return "";
}

function bindResultPreviews(resultPanel) {
  if (!resultPanel || resultPanel.dataset.previewsBound) return;
  resultPanel.dataset.previewsBound = "true";
  resultPanel.addEventListener("click", (event) => {
    const button = event.target.closest("[data-preview-button]");
    if (!button) return;
    const previewUrl = button.dataset.previewUrl;
    if (!previewUrl) return;
    const video = document.createElement("video");
    video.className = "result-player";
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.src = previewUrl;
    button.replaceWith(video);
    video.play().catch(() => {});
  });
}

function bindResultPanelScrollHandoff(resultPanel) {
  if (!resultPanel || resultPanel.dataset.scrollHandoffBound) return;
  resultPanel.dataset.scrollHandoffBound = "true";

  let edgeScrollCount = 0;
  let lastDirection = 0;
  let lastWheelTime = 0;

  resultPanel.addEventListener("wheel", (event) => {
    if (resultPanel.hidden || !event.deltaY) return;

    const direction = Math.sign(event.deltaY);
    const now = Date.now();
    const canScroll = resultPanel.scrollHeight > resultPanel.clientHeight + 1;
    const atTop = resultPanel.scrollTop <= 0;
    const atBottom = Math.ceil(resultPanel.scrollTop + resultPanel.clientHeight) >= resultPanel.scrollHeight;
    const pastEdge = !canScroll || (direction < 0 && atTop) || (direction > 0 && atBottom);

    if (!pastEdge) {
      edgeScrollCount = 0;
      lastDirection = direction;
      lastWheelTime = now;
      return;
    }

    if (direction !== lastDirection || now - lastWheelTime > 900) {
      edgeScrollCount = 0;
    }

    lastDirection = direction;
    lastWheelTime = now;
    edgeScrollCount += 1;

    if (edgeScrollCount < RESULT_SCROLL_HANDOFF_TICKS) {
      event.preventDefault();
      return;
    }

    window.scrollBy({ top: event.deltaY, left: event.deltaX, behavior: "auto" });
    event.preventDefault();
  }, { passive: false });
}

function startResultProgress(resultPanel) {
  const valueNode = resultPanel.querySelector("[data-progress-value]");
  const barNode = resultPanel.querySelector("[data-progress-bar]");
  let value = 0;
  const update = (nextValue) => {
    value = Math.max(value, Math.min(100, nextValue));
    if (valueNode) valueNode.textContent = `${Math.round(value)}%`;
    if (barNode) barNode.style.width = `${value}%`;
  };
  update(8);
  const timer = setInterval(() => {
    const increment = value < 40 ? 9 : value < 75 ? 6 : 3;
    update(Math.min(94, value + increment));
  }, 260);
  return { timer, update };
}

function stopResultProgress(progress) {
  if (progress?.timer) clearInterval(progress.timer);
}

function finishResultProgress(progress) {
  if (!progress) return Promise.resolve();
  stopResultProgress(progress);
  progress.update(100);
  return new Promise((resolve) => setTimeout(resolve, 280));
}

function userFriendlyError(message) {
  const text = String(message || "").toLowerCase();
  if (text.includes("unsupported url")) return "This link is not a supported public media page. Try a direct video, image, reel, post, or attachment link.";
  if (text.includes("login") || text.includes("private") || text.includes("403")) return "This media looks private or restricted. Try a public link that opens without signing in.";
  if (text.includes("timed out") || text.includes("timeout")) return "The platform took too long to respond. Try again, or use another public link.";
  if (text.includes("no video")) return "No playable video was found in this post. Try a post that contains a video.";
  return "We could not prepare this link. Try a public media link or direct file URL.";
}

function statusLabel(status) {
  return {
    ready: "Ready to download",
    connector_required: "Connector or public access required",
    unsupported: "Unsupported link"
  }[status] || "Needs attention";
}

function offlineResultHtml(tool, format, quality, message) {
  return `
    <div class="result-topline">
      <strong>${tool.name}</strong>
      <span>Backend not reachable</span>
      <span>Requested: ${formatLabel(format)} / ${escapeHtml(quality)}</span>
    </div>
    <div class="result-options">
      <div class="result-card result-card-wide">
        <strong><i data-lucide="server-off"></i> Start the local backend</strong>
        <p>${escapeHtml(message || "Open this website through the Node server, not directly as a file, to use real download analysis.")}</p>
        <p>Run <code>npm start</code>, then open <code>http://localhost:3000</code>.</p>
      </div>
    </div>
  `;
}

async function submitContactForm(form) {
  const fields = form.querySelectorAll("input, textarea");
  const payload = {
    name: fields[0]?.value.trim() || "",
    email: fields[1]?.value.trim() || "",
    subject: fields[2]?.value.trim() || "",
    message: fields[3]?.value.trim() || ""
  };
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Contact API failed.");
    showToast("Message received by the local backend.");
    form.reset();
  } catch {
    showToast("Contact form is ready. Start the backend with npm start to capture messages.");
  }
}

function absoluteApiUrl(url) {
  if (!url || /^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url}`;
}

function formatLabel(format) {
  return {
    video: "Video",
    audio: "Audio",
    thumbnail: "Thumbnail or Image",
    gif: "GIF"
  }[format] || "Media";
}

function detectTool(url) {
  try {
    const hostname = new URL(String(url || "")).hostname.toLowerCase();
    return platforms.find((platform) => platform.domains.some((domain) => hostMatchesDomain(hostname, domain)));
  } catch {
    const value = String(url || "").toLowerCase();
    return platforms.find((platform) => platform.domains.some((domain) => value.includes(domain)));
  }
}

function hostMatchesDomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

function renderPlatformGrids() {
  document.querySelectorAll("[data-platform-grid]").forEach((mount) => {
    mount.innerHTML = platforms.map(platformCard).join("");
  });
}

function platformCard(platform) {
  return `
    <a class="platform-card reveal" style="--platform-color: ${platform.color}" href="platform.html?platform=${platform.slug}" aria-label="${platform.title}">
      <div>
        ${platformLogoHtml(platform, true)}
        <h3>${platform.name}</h3>
        <p>${platform.short}</p>
      </div>
      <span class="platform-arrow">Open Downloader <i data-lucide="arrow-right"></i></span>
    </a>
  `;
}

function renderPlatformPage() {
  const mount = document.querySelector("[data-platform-page]");
  if (!mount) return;
  const slug = new URLSearchParams(location.search).get("platform") || "youtube";
  const platform = platformBySlug[slug] || platformBySlug.youtube;
  document.title = `${platform.name} Downloader - SnapVideoHub`;
  mount.innerHTML = `
    <section class="page-hero platform-hero" style="--platform-color: ${platform.color}">
      <div class="platform-hero-inner">
        <div>
          <div class="platform-title-row">
            ${platformLogoHtml(platform, false)}
            <p class="eyebrow">${platform.name} Downloader</p>
          </div>
          <h1>${platform.title}</h1>
          <p>${platform.description}</p>
          <div class="platform-badges">
            ${platform.types.map((type) => `<span>${type}</span>`).join("")}
          </div>
        </div>
        <div data-downloader data-default-platform="${platform.slug}"></div>
      </div>
    </section>

    <section class="section detail-grid">
      <div>
        <p class="eyebrow">What you can download</p>
        <h2>${platform.name} formats and quality options</h2>
        <p>Choose the format that matches your use case. Available output depends on the public source link and the connected processing API.</p>
      </div>
      <ul class="check-list">
        ${platform.types.map((type) => `<li>${type}</li>`).join("")}
        <li>No sign-up required for the frontend flow</li>
        <li>Mobile, tablet, desktop, and smart browser support</li>
      </ul>
    </section>

    <section class="section process-band">
      <div class="section-heading">
        <p class="eyebrow">Simple guide</p>
        <h2>How to use the ${platform.name} downloader</h2>
      </div>
      <div class="steps-grid">
        <article><span>01</span><h3>Copy link</h3><p>Open ${platform.name} and copy the public video, media, post, story, or file URL.</p></article>
        <article><span>02</span><h3>Paste URL</h3><p>Paste the copied link into the SnapVideoHub ${platform.name} download box.</p></article>
        <article><span>03</span><h3>Select format</h3><p>Choose video, audio, thumbnail, image, or GIF based on what you need.</p></article>
        <article><span>04</span><h3>Choose quality</h3><p>Select Best Available, HD, Full HD, 2K, 4K, MP3 320 kbps, or original thumbnail.</p></article>
        <article><span>05</span><h3>Save file</h3><p>Use the returned download option after your backend/API generates the media file.</p></article>
      </div>
    </section>

    <section class="section split-section">
      <div>
        <p class="eyebrow">Best results</p>
        <h2>Tips for ${platform.name}</h2>
        <p>These details help users avoid failed downloads and understand why a link may not return every quality or format.</p>
      </div>
      <div class="feature-list">
        ${platform.tips.map((tip, index) => `<article><i data-lucide="${["badge-check", "shield-check", "lightbulb"][index % 3]}"></i><h3>${tip}</h3><p>SnapVideoHub keeps the workflow clear so users know what to try next when a source link has limits.</p></article>`).join("")}
        <article><i data-lucide="scale"></i><h3>Download legally and responsibly</h3><p>Only save content you own, have permission to use, or are legally allowed to download.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">More tools</p>
        <h2>Open another dedicated downloader</h2>
      </div>
      <div class="platform-grid">
        ${platforms.filter((item) => item.slug !== platform.slug).slice(0, 5).map(platformCard).join("")}
      </div>
    </section>
  `;
}

function renderTutorials() {
  const list = document.querySelector("[data-tutorial-list]");
  const filter = document.querySelector("#tutorial-filter");
  if (!list) return;
  const draw = () => {
    const query = (filter?.value || "").toLowerCase();
    const filtered = tutorials.filter((item) => `${item.title} ${item.tag} ${item.intro}`.toLowerCase().includes(query));
    list.innerHTML = filtered.map(tutorialItem).join("") || `<article class="accordion-item"><p>No tutorials match this search.</p></article>`;
    list.querySelectorAll(".accordion-item").forEach((item) => item.classList.add("in-view"));
    bindAccordions();
    refreshIcons();
    openTutorialFromHash();
  };
  filter?.addEventListener("input", draw);
  draw();
}

function tutorialItem(item) {
  return `
    <article class="accordion-item reveal" id="tutorial-${item.id}">
      <button class="accordion-button" type="button" aria-expanded="false">
        <span>
          <span class="eyebrow">${item.tag}</span>
          <h2>${item.title}</h2>
        </span>
        <i data-lucide="chevron-down"></i>
      </button>
      <div class="accordion-body" hidden>
        <p>${item.intro}</p>
        <ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        <ul>${item.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function bindAccordions() {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const body = button.parentElement.querySelector(".accordion-body");
      const open = body.hidden;
      body.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.querySelector("i")?.setAttribute("data-lucide", open ? "chevron-up" : "chevron-down");
      refreshIcons();
    });
  });
}

function openTutorialFromHash() {
  const id = location.hash.replace("#", "");
  if (!id) return;
  const item = document.getElementById(id);
  const button = item?.querySelector(".accordion-button");
  const body = item?.querySelector(".accordion-body");
  if (button && body) {
    body.hidden = false;
    button.setAttribute("aria-expanded", "true");
    setTimeout(() => item.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }
}

function renderSupportMatrix() {
  const mount = document.querySelector("[data-support-matrix]");
  if (!mount) return;
  mount.innerHTML = platforms.map((platform) => `
    <article class="matrix-card reveal">
      <h3>${platform.name}</h3>
      <p>${platform.title}</p>
      <ul>${platform.types.slice(0, 5).map((type) => `<li>${type}</li>`).join("")}</ul>
      <a class="btn btn-secondary" href="platform.html?platform=${platform.slug}"><i data-lucide="arrow-right"></i> Open Tool</a>
    </article>
  `).join("");
}

function renderLegalPage() {
  const mount = document.querySelector("[data-legal-page]");
  if (!mount) return;
  const requested = new URLSearchParams(location.search).get("doc") || "privacy";
  const key = legalDocs[requested] ? requested : "privacy";
  const doc = legalDocs[key];
  document.title = `${doc.label} - SnapVideoHub`;
  mount.innerHTML = `
    <section class="page-hero compact-hero">
      <div>
        <p class="eyebrow">${doc.label}</p>
        <h1>${doc.title}</h1>
        <p>${doc.intro}</p>
      </div>
    </section>
    <section class="section legal-layout">
      <nav class="legal-tabs" aria-label="Policy navigation">
        ${Object.entries(legalDocs).map(([slug, item]) => `<a class="${slug === key ? "active" : ""}" href="legal.html?doc=${slug}">${item.label}</a>`).join("")}
      </nav>
      <div class="legal-content">
        ${doc.content ? renderLegalContent(doc.content) : doc.sections.map(([heading, items]) => `
          <article class="legal-card reveal">
            <h2>${heading}</h2>
            <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        `).join("")}
        ${key === "contact" ? contactFormHtml() : ""}
      </div>
    </section>
  `;
}

function renderLegalContent(content) {
  return content.map((group) => `
    <article class="legal-card legal-full reveal">
      <h2>${escapeHtml(group.heading)}</h2>
      ${(group.sections || []).map((section) => `
        <div class="legal-subsection">
          ${section.heading ? `<h3>${escapeHtml(section.heading)}</h3>` : ""}
          ${(section.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          ${section.list ? `<ul>${section.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
          ${section.footer ? `<p>${escapeHtml(section.footer)}</p>` : ""}
        </div>
      `).join("")}
    </article>
  `).join("");
}

function contactFormHtml() {
  return `
    <article class="legal-card">
      <h2>Contact Form</h2>
      <form class="contact-form" data-contact-form>
        <input class="text-input" type="text" placeholder="Your Name" aria-label="Your name">
        <input class="text-input" type="email" placeholder="Email Address" aria-label="Email address">
        <input class="text-input" type="text" placeholder="Subject" aria-label="Subject">
        <textarea placeholder="Detailed Message" aria-label="Detailed message"></textarea>
        <button class="btn btn-primary" type="submit"><i data-lucide="send"></i> Send Message</button>
      </form>
    </article>
  `;
}

function renderBlogGrid() {
  const mount = document.querySelector("[data-blog-grid]");
  if (!mount) return;
  mount.innerHTML = tutorials.slice(0, 18).map((item) => `
    <article class="blog-card reveal">
      <span class="tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.intro}</p>
      <a class="btn btn-secondary" href="tutorials.html#tutorial-${item.id}"><i data-lucide="book-open"></i> Read Guide</a>
    </article>
  `).join("");
}

function renderLanguageCloud() {
  const mount = document.querySelector("[data-language-cloud]");
  if (!mount) return;
  mount.innerHTML = languages.map((language) => `<span lang="${language.code}" dir="${language.dir}">${escapeHtml(languageDisplayName(language))}</span>`).join("");
}

function renderSearchResults(query, mount) {
  if (!mount) return;
  const normalized = String(query || "").trim().toLowerCase();
  const pages = [
    { title: "Home", label: "Main downloader", url: "index.html" },
    { title: "Supported Platforms", label: "All 15 downloader tools", url: "supported-platforms.html" },
    { title: "Tutorials", label: "Detailed platform guides", url: "tutorials.html" },
    { title: "Chrome Extension", label: "Browser workflow page", url: "extension.html" },
    { title: "Blog", label: "Downloader articles", url: "blog.html" },
    ...platforms.map((platform) => ({ title: platform.title, label: platform.short, url: `platform.html?platform=${platform.slug}` })),
    ...Object.entries(legalDocs).map(([slug, doc]) => ({ title: doc.label, label: doc.title, url: `legal.html?doc=${slug}` })),
    ...tutorials.map((item) => ({ title: item.title, label: item.intro, url: `tutorials.html#tutorial-${item.id}` }))
  ];
  const results = normalized ? pages.filter((item) => `${item.title} ${item.label}`.toLowerCase().includes(normalized)).slice(0, 16) : pages.slice(0, 12);
  mount.innerHTML = results.map((item) => `
    <a class="search-result" href="${item.url}">
      <strong>${item.title}</strong>
      <span>${item.label}</span>
    </a>
  `).join("") || `<p class="search-result">No results found.</p>`;
}

function platformLogoHtml(platform, lazy = true) {
  const fallback = platform.slug === "linkedin" ? "in" : platform.name.slice(0, 2);
  if (platform.slug === "mp3") {
    return `<div class="platform-logo platform-logo-${platform.slug}" data-fallback="${escapeHtml(fallback)}"><i data-lucide="music"></i></div>`;
  }
  return `
    <div class="platform-logo platform-logo-${platform.slug}" data-fallback="${escapeHtml(fallback)}">
      <img src="${iconUrl(platform)}" alt="${platform.name} logo"${lazy ? " loading=\"lazy\"" : ""} onerror="this.parentElement.classList.add('logo-failed');this.remove();">
    </div>
  `;
}

function iconUrl(platform) {
  if (platform.slug === "linkedin") {
    return linkedinIconDataUrl();
  }
  return `https://cdn.simpleicons.org/${platform.icon}/${platform.color.replace("#", "")}`;
}

function linkedinIconDataUrl() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0a66c2"/><circle cx="20" cy="19" r="6" fill="#fff"/><path fill="#fff" d="M15 28h10v24H15zM30 28h9v3.4c1.4-2.1 4-4 8.1-4 8.5 0 10 5.6 10 12.9V52H47V41.7c0-2.5 0-5.7-3.5-5.7s-4 2.7-4 5.5V52H30z"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function initReveal() {
  const items = document.querySelectorAll(".platform-card, .feature-list article, .media-grid article, .steps-grid article, .matrix-card, .blog-card, .accordion-item, .legal-card");
  items.forEach((item) => item.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  updateThemeIconSafe();
}

function updateThemeIconSafe() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle || toggle.dataset.ready === document.documentElement.dataset.theme) return;
  const dark = document.documentElement.dataset.theme === "dark";
  toggle.dataset.ready = document.documentElement.dataset.theme;
  toggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}
