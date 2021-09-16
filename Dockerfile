FROM node:14-alpine
WORKDIR /usr/src/app
COPY api/package*.json ./
RUN npm ci --only=production
COPY /dist ./public
COPY /api/dist .
EXPOSE 3001
CMD [ "node", "index.js" ]