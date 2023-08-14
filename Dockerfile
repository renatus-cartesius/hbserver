# Development stage
FROM node:18.17.1-alpine as development
WORKDIR /usr/src/hbserver/
COPY --chown=node:node package*.json ./
RUN npm ci
COPY  --chown=node:node . .
USER node

# Build stage
FROM node:18.17.1-alpine as build
WORKDIR /usr/src/hbserver/
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/hbserver/node_modules ./node_modules
COPY --chown=node:node ./ ./
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
USER node

# Production stage
FROM node:18.17.1-alpine as production
WORKDIR /usr/src/hbserver/
RUN mkdir /etc/hbserver && chown node:node /etc/hbserver
COPY config.yml /etc/hbserver/config.yml
COPY --chown=node:node --from=build /usr/src/hbserver/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/hbserver/dist ./dist
COPY --chown=node:node package*.json ./
CMD ["npm", "run", "start:prod"]
