FROM node

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

#RUN yarn build

ENV PORT 3000

EXPOSE $PORT

VOLUME ["/app/data"]

CMD ["yarn", "start"]




