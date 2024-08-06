FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

# yarn dev
# CMD ["yarn", "dev"]

CMD ["nginx", "-g", "daemon off;"]