/* jshint node:true */
'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve('./public')));
app.use(express.static(path.resolve('./build')));

var server = app.listen(3000, function () {
    console.log('Tree example running at http://localhost:%s/', server.address().port);
});
