var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response) {
  console.log("User requested profile")
}

function forum(request, response) {
  console.log("User requested forum")
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running...");

// Summary: connect package allows node to be connected to the browser. When a user requests a page, such as profile or forum in this example, a function can be fired. In this example functions profile and forum are fired when user tries to go to those pages - http://localhost:8888/profile & http://localhost:8888/forum in this case. When user requests those pages a console.log msg appears in the terminal saying "User requested profile" or "User requested forum".