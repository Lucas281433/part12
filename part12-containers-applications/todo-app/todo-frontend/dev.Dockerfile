FROM node:16.17.0-bullseye-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV CHOKIDAR_USEPOLLING=true
CMD [ "npm", "start" ]
