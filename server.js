'use strict';

var express = require('express');
var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();
require('dotenv').load();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/filesize', upload.single('myFile'), function (req, res, next) {
  console.log("size of upload: " + req.file.size);
  res.end(req.file.size.toString(10));
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});