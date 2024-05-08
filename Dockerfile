FROM node:alpine

WORKDIR /app

RUN npm i -g pnpm

COPY package.json ./

RUN pnpm i

COPY  . .  

EXPOSE 8000

CMD [ "pnpm" , "start" ]