FROM node:8.11.3
COPY . /app
WORKDIR /app
RUN npm i --registry=https://registry.npm.taobao.org
EXPOSE 7001
CMD npm run migrate:up && npm run dev
