FROM node:14

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 3005

CMD yarn start
