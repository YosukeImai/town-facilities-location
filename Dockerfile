FROM node:16

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
COPY package*.json ./

RUN npm install
# RUN npm install --only=production

#アプリケーションのソースをバンドルする
COPY . .

EXPOSE 8080

CMD [ "npm", "start"]

