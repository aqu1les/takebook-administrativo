FROM node:alpine

COPY . /var/www/html
WORKDIR /var/www/html
RUN rm -rf node_modules/
RUN rm yarn.lock
RUN yarn install --silent
RUN yarn global add serve

CMD ["yarn", "build"]