FROM node:lts-alpine

WORKDIR /app

RUN npm install

COPY . ./bitcoin

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]