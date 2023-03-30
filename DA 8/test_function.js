var http = require('http');
var a = require('./function_fib');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>Fibonacci series</h1>")
  res.write("<br>Fibonacci series for the first 25 number are <br>"+a.fib(25));
  res.end();
}).listen(5000);