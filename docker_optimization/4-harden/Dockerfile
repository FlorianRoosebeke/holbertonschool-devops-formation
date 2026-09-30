FROM node:20-alpine

WORKDIR /usr/src/app

RUN addgroup -S app && adduser -S -G app app

COPY package*.json ./
RUN npm install

COPY --chown=app:app . .

USER app

HEALTHCHECK --interval=5s --timeout=3s --start-period=5s \
  CMD node -e "require('http').get('http://127.0.0.1:3000/health', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "server.js"]