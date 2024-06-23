FROM node:16.17.0-bullseye-slim
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
ENV DEBUG=todo-express-backend:*
USER node
CMD npm start
