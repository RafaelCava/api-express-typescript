FROM node:14-alpine

WORKDIR /home/node/app

COPY . .

RUN apk add --no-cache bash

USER node