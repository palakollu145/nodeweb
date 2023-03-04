FROM public.ecr.aws/c4g3p9t9/node-alpine:18.12.1-8.19.2
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
