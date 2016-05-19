var http = require('http');

var app = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.end('Hello, World!');
});

module.exports = app;
