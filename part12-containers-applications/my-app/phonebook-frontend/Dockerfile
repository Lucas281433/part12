FROM node:18.14.2-bullseye-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
COPY . .
ENV NODE_ENV=production
ENV VITE_API_BACKEND_URL=http://localhost:8080/api/api/persons
RUN npm run build
RUN npm install -g serve
EXPOSE 5173
ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "npm", "run", "preview" ]