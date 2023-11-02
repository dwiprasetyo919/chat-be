# Farmio

Backend for Chat App

## Requirements

1. [node.js v12 and npm v6+](https://www.npmjs.com/get-npm)
2. [mongodb](https://www.mongodb.com/)

## Usage

1. Clone this repo.
2. move to chat-be folder.
3. configure .env
    ```dotenv
    PORT = 5002
    DB_NAME = mongodb://localhost/chat
    JWTSECRET = b2cba7645bbef477c99d9d9d1a1f344696f8cbec192a0862f116bde996069d0a
    ```
4. run `npm install` to install all package.
5. run `npm run start:dev` to run app in development mode.
6. open browsers and open `localhost:5002/api/v1/ping`, it should return **Ping Pong!**

## Documentation
For Web, open browser and go to `http://localhost:5002/api/docs#/`
