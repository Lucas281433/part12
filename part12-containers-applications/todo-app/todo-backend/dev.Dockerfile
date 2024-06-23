FROM node:16.17.0-bullseye-slim
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm install
ENV PORT=3003
ENV REDIS_URL=redis://redis:6379
ENV MONGO_URL=mongodb://the_username:the_password@mongo:27017/the_database
ENV DEBUG=todo-express-backend:*
ENV CHOKIDAR_USEPOLLING=true
USER node
CMD [ "npm", "run", "dev" ]