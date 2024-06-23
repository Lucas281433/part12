FROM node:16.17.0-bullseye-slim AS base-stage
WORKDIR /usr/src/app

FROM base-stage AS test-stage
COPY . .
RUN npm ci
RUN CI=true npm run test

FROM test-stage AS build-stage
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
RUN npm run build
RUN npm install -g serve
CMD [ "serve", "build" ]
#FROM nginx:1.20-alpine
#COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html