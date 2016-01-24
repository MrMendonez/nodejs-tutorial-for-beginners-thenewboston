var http = require('http');

function onRequest(request, response) {
  console.log("A user made a request" + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("Here is some data.");
  response.end();
};

http.createServer(onRequest).listen(8888);
console.log("Server is now running....")

// Summary: This is how to create a basic server. Require the http core module. Create a function that accepts two parameters - request and response. request.url will show the file name that is being requested. If it is the homepage it will show a '/' with no file name after. The 200 parameter in the response.writeHead indicates that the server was successfully able to find what the user was looking for. The next parameter is the type of data that is being requested. response.write allows you to write your response. response.end() signifies that the response has ended and fires it off. http.createServer is the Node code to turn this file into a server. The parameter is the function that will fire when the user is requesting. Whenever users connect to your server your server has to be listening for a request. The parameter for listen is the port number.