FROM node:latest

COPY . /var/www/html
WORKDIR /var/www/html
RUN npm install --silent
RUN npm fund
RUN npm audit fix

CMD ["npm", "start"]