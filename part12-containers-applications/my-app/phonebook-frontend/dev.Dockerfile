FROM node:18.14.2-bullseye-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
COPY  . .
ENV VITE_API_BACKEND_URL=http://localhost:8080/api/api/persons
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 5173
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["npm", "run", "dev"]
