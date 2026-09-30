FROM node:20-slim

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY --chown=node:node index.js ./

USER node

EXPOSE 3000
CMD ["node", "index.js"]