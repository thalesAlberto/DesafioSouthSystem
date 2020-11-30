FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --unsafe-perm

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]