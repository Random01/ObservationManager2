FROM node:18-alpine
WORKDIR /usr/src/app
COPY api/package*.json ./
RUN npm ci --only=production
COPY /dist ./public
COPY /api/dist .
EXPOSE 3002
CMD [ "node", "index.js" ]