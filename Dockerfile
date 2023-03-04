FROM node:18.12.1-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm i
EXPOSE 8080
CMD [ "node", "server.js" ]
