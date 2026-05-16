# SnapVideoHub Hostinger VPS Deployment

SnapVideoHub is not only static HTML/CSS/JS. The downloader needs `server.js` running on Node.js, plus `yt-dlp` for public platform extraction. `ffmpeg` is optional for simple streams, but needed for merged HD video/audio and audio conversion.

## 1. DNS

Point the domain to the VPS IP:

```text
@     A      148.230.66.236
www   CNAME  snapvideohub.com
```

After changing DNS, wait for propagation before testing HTTPS.

## 2. Install VPS Packages

On an Ubuntu/Debian VPS:

```bash
sudo apt update
sudo apt install -y nodejs npm nginx python3 python3-pip pipx ffmpeg
pipx ensurepath
pipx install yt-dlp
```

Log out and log back in after `pipx ensurepath`, then verify:

```bash
node --version
npm --version
yt-dlp --version
ffmpeg -version
```

If `yt-dlp` works only from a custom path, set it when starting the app:

```bash
export YTDLP_PATH="$HOME/.local/bin/yt-dlp"
```

## 3. Run The App

From the project folder:

```bash
npm run check
PORT=3000 YTDLP_PATH="$HOME/.local/bin/yt-dlp" node server.js
```

Open:

```text
http://YOUR_VPS_IP:3000/api/health
```

The response should show:

```json
"extractor": { "ok": true, "installed": true }
```

## 4. Keep It Running With PM2

```bash
sudo npm install -g pm2
PORT=3000 YTDLP_PATH="$HOME/.local/bin/yt-dlp" pm2 start server.js --name snapvideohub --update-env
pm2 save
pm2 startup
```

After code changes:

```bash
pm2 restart snapvideohub --update-env
```

## 5. Nginx Reverse Proxy

Create `/etc/nginx/sites-available/snapvideohub`:

```nginx
server {
    server_name snapvideohub.com www.snapvideohub.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/snapvideohub /etc/nginx/sites-enabled/snapvideohub
sudo nginx -t
sudo systemctl reload nginx
```

Add SSL with Certbot or Hostinger's VPS SSL tool, then test:

```bash
curl https://snapvideohub.com/api/health
```

## 6. Common Fixes

- If the website loads but downloads show `Connector or public access required`, run `https://snapvideohub.com/api/health` and check `extractor.ok`.
- If `extractor.ok` is false, install or upgrade `yt-dlp`, set `YTDLP_PATH`, and restart PM2.
- If only high quality or MP3 fails, check `ffmpeg.ok`.
- If a private/login/copyright-restricted link fails, that is expected. Use only public media you own or are authorized to download.
- Keep `yt-dlp` updated because platform page formats change:

```bash
pipx upgrade yt-dlp
pm2 restart snapvideohub --update-env
```
