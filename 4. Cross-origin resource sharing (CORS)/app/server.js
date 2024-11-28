const fs = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

const port = 3000;

app.use(cookieParser());

// Middleware
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:4000");
  res.set("Access-Control-Allow-Credentials", "true");
  // res.set("Access-Control-Allow-Methods", "");
  // res.set("Access-Control-Allow-Headers", "");

  next();
});

// Routes
app.get("/api", (req, res) => {
  res.send({
    message: "Hello, get!",
    authenticated: req.cookies?.authenticated == "true",
  });
});

app.post("/api", (req, res) => {
  res.send({
    message: "Hello, post!",
    authenticated: req.cookies?.authenticated == "true",
  });
});

app.put("/api", (req, res) => {
  res.send({
    message: "Hello, put!",
    authenticated: req.cookies?.authenticated == "true",
  });
});

app.delete("/api", (req, res) => {
  res.send({
    message: "Hello, delete!",
    authenticated: req.cookies?.authenticated == "true",
  });
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
