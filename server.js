var express = require('express');
const db = require("./database/config");
const mongoose = require("mongoose");
const routes = require('./src/routes/product-routes');

mongoose.connect(db.uri, { useNewUrlParser: true });

var app = express();
var port = 3000;

app.use(express.json());

app.use(routes);

app.listen(port, function () {
  console.log(`Server is running at localhost:${port}`);
})
