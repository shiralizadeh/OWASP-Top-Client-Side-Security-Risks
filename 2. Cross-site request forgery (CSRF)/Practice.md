# Cross-site request forgery (CSRF)

## Steps

- Go to `app` folder in terminal
- Run `npm install`
- Run `npm install -g nodemon`
- Run `nodemon server.js`

## Practice One

- Prepare an attack to the change password form
- Fix vulnerability using `csurf` package
- Fix login vulnerability of session cookie
- Explore `SameSite` Cookie Attribute (`None`, `Strict`, `Lax`)
- Explore `Secure` Cookie Attribute (`true`/`false`)
- Explore `HttpOnly` Cookie Attribute (`true`/`false`)

## Practice Two

- Include `js` file in the html
- Remove backend `/` route
- Fix it using CSP
