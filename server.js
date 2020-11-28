var express = require('express');
var port = 3000;
var app = express();

app.listen(port, function() {
  console.log(`Server is running at localhost:${port}`);
})