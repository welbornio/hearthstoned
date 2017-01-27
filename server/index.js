'use strict';

var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');

//### express configuration
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: false}));

//### express routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

//### game routes
require('./modules/Game');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
