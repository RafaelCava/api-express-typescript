FROM node:alpine

EXPOSE 3333

COPY . .

RUN yarn 

CMD ["yarn", "dev"]