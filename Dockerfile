FROM node:9-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
RUN npm install
RUN npm i -g pm2

COPY . /usr/src/app

RUN npm run build

EXPOSE 5000

CMD pm2 start server.js && pm2 logs
