var express = require('express')
var app = express()
var routes = require('./server')
var path = require('path')

var sitePath = process.argv[2] || ".";
var port = 1337;
 
// Request logging
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});
 
// Start server
console.log(sitePath);
console.log("Starting server in: " + __dirname + '/' + sitePath);
app.use(express.static(__dirname + '/' + sitePath));
app.listen(port, function() { 
    console.log("Server running at: http://localhost:" + port)
});