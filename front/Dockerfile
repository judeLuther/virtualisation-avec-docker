FROM node:latest as node

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@15.2.6

COPY . .

RUN npm run build --prod


FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=node /app/dist/front /usr/share/nginx/html
