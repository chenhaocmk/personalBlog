
var http = require("http");
var url = require("url");

function start(handle) {
    function onRequest(request, response) {
      var pathName = url.parse(request.url).pathname;
      console.log("Request for " + pathName + " received.");

      request.setEncoding("utf8");

      if (pathName in handle) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
      } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Not found!");
      }
      response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
