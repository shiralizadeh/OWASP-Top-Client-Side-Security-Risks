# Cross-origin resource sharing (CORS)

## Steps

- Go to `app` & `app-exploit` folder in terminal
- Run `npm install`
- Run `npm install -g nodemon`
- Run `nodemon server.js`

## Practice One

- Call `get`/`post`/`put`/`delete` APIs from `app-exploit`
- Fix CORS issue using `Access-Control-Allow-Origin: *` header
- Send Cookies to the Server
- Set Cookie `SameSite` to `Lax`/`Strict`
- Set `Content-Type` header for `POST` request
- Set a Custom Header for `GET`/`POST` requests
