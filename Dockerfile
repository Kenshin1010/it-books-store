FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8080

# yarn dev
CMD ["yarn", "dev"]