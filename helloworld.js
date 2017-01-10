/*
    Name: Alex Oladele 
    Date: 1/10/2017
    Course: CSE 270e
    Assignment: NodeJS Servers
*/

// Creates a variable that uses the 'http' dependency
var http = require("http");
    

// Starts an instance of an http server
http.createServer(function (request, response) {

   // Send the HTTP header to the request
   // HTTP Status: 200 meaning  'OK'
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(7900);

// Console will print the message
console.log('Server running at http://127.0.0.1:7900/');

