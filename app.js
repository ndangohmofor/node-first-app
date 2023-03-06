const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express(); //Request handler

app.use(bodyParser.urlencoded({ extended: false }));

// const server = http.createServer(app);

app.use(adminRoutes);
app.use(shopRoutes);

// server.listen(3000);
app.listen(3000);
