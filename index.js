'use strict';

var express = require('express');
var app = module.exports.app = express();
var server = require('http').Server(app);
var io = module.exports.io = require('socket.io')(server);
var bodyParser = require('body-parser');

//### express configuration
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: false}));
app.use('/vendor', express.static(__dirname + '/node_modules/'));

//### express routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//### game routes
require('./modules/Game');

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
