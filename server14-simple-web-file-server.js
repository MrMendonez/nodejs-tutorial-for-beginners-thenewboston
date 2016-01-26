var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write("Error 404: Page not found!");
  response.end();
};

function onRequest(request, response) {
  if(request.method == 'GET' && request.url == '/' ) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index14.html').pipe(response);
  }
  else {
    send404Response(response);
  }
};

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");

// Summary: This is a simple way to request a site from a server. index14.html is the example site used here. send404Response() handles the error msg that appears when a user tries to go to a site that doesn't exist. onRequest() will send index14.html as the home page. The else statement fires the send404Response().