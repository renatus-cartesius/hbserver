FROM node:18.17.1-alpine

WORKDIR /hbserver/

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "start"]