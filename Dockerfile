# stage1 as builder
FROM node:10-alpine

WORKDIR /api

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]