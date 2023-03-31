FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3333

RUN npm run build 