const fs = require("fs");
const express = require("express");
const path = require("path");
const sanitizeHtml = require('sanitize-html');
const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  res.set("Content-Security-Policy", "default-src 'self';");
  
  next();
});

// Routes
app.get("/", (req, res) => {
  // read index.html file
  var data = fs.readFileSync("index.html", "utf8");

  const cleanQ = sanitizeHtml(req.query.q);
  const q1 = encodeURIComponent(req.query.q);

  // replace {{QUERY}} with query parameter
  data = data.replace("{{QUERY}}", req.query.q || "[q] is EMPTY");

  // send the response
  res.send(data);
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
