FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install -g yarn && yarn
COPY . ./
ENV PORT 3000
EXPOSE ${PORT}
CMD ["npm", "run", "start:dev"]