FROM node:22-alpine

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY api/package*.json ./
RUN npm ci --only=production

# Copy build artifacts
COPY dist/browser ./public
COPY api/dist ./

EXPOSE 3002

CMD [ "node", "index.js" ]