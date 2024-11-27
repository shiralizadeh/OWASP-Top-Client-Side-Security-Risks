const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
  // res.set("[HEADER]", "[VALUE]");
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
