FROM node:20-bookworm-slim

ENV NODE_ENV=production
ENV PORT=10000
ENV HOST=0.0.0.0
ENV YTDLP_PATH=/usr/local/bin/yt-dlp

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    ffmpeg \
    python3 \
  && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
  && chmod a+rx /usr/local/bin/yt-dlp \
  && /usr/local/bin/yt-dlp --version \
  && ffmpeg -version

COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

COPY . .

EXPOSE 10000

CMD ["npm", "start"]
