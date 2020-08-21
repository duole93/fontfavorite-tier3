"use strict";

var express = require('express');

var dotenv = require('dotenv');

var app = express();
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});