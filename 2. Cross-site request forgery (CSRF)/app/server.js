const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const csrf = require("csurf");

// setup route middlewares
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

// create express app
const app = express();
const port = 3000;

// set the view engine to pug
app.set("view engine", "pug");

// parse cookies
app.use(cookieParser());

// sessions
const sessions = {};

// root
app.get("/", csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.render("index", { csrfToken: req.csrfToken() });
});

app.post("/process", parseForm, function (req, res) {
  res.send(
    `Data is being processed! ${JSON.stringify({
      body: req.body,
      referer: req.headers["referer"],
    })}`
  );
});

// Login
app.post("/login", parseForm, function (req, res) {
  const session = Math.random().toString(36).substring(7);
  const { username } = req.body;

  sessions[session] = {
    username,
  };

  res.cookie("session", session, {
    sameSite: "lax",
  });
  res.send(`${username} has Logged In! Session: ${session}`);
});

// Status
app.get("/userInfo", function (req, res) {
  const username = sessions[req.cookies.session]?.username || "Guest";

  res.render("userInfo", { username });
});

// Logout
app.get("/logout", function (req, res) {
  res.clearCookie("session");
  res.send(`Logged Out!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
