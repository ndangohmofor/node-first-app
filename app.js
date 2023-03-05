// const http = require("http");
// const routes = require("./routes");
const express = require("express");

const app = express(); //Request handler

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //Allow the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware");
  //send response
  res.send("<h1>Hellow from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
