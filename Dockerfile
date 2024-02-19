FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install esbuild@0.19.11
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]