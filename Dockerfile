FROM node:22
WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 5173

# yarn dev
CMD ["yarn", "dev"]