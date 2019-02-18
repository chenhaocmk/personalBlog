const fs = require('fs');

function getIndex(request, response) {
  fs.readFile("./template/index.html", "utf-8", function(error, contents) {
    if (error) {
      response.writeHead(500, {"Content-Type": "application/json"});
      response.write(JSON.stringify({"data": null}));
      response.end();
      console.log("Get Index error: " + error);
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents);
      response.end();
      console.log("Get Index");
    }
  });
}

function getCSSTemplate(request, response) {
  fs.readFile("./template/template.css", "utf-8", function(error, contents) {
    if (error) {
      response.writeHead(500, {"Content-Type": "application/json"});
      response.write(JSON.stringify({"data": null}));
      response.end();
      console.log("Get CSS error: " + error);
    } else {
      response.writeHead(200, {"Content-Type": "text/css"});
      response.write(contents);
      response.end();
      console.log("Get CSS");
    }
  });
}

function getCreateBlog(request, response) {
  fs.readFile("./template/createBlog.html", "utf-8", function(error, contents) {
    if (error) {
      response.writeHead(500, {"Content-Type": "application/json"});
      response.write(JSON.stringify({"data": null}));
      response.end();
      console.log("Get create blog error: " + error);
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents);
      response.end();
      console.log("Get create blog");
    }
  });
}

function getUpdateBlog(request, response) {
  fs.readFile("./template/updateBlog.html", "utf-8", function(error, contents) {
    if (error) {
      response.writeHead(500, {"Content-Type": "application/json"});
      response.write(JSON.stringify({"data": null}));
      response.end();
      console.log("Update blog page error: " + error);
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents.replace("{{id}}", request.params.blogId));
      response.end();
      console.log("Update blog page detail: " + request.params.blogId);
    }
  });
}

function getBlog(request, response) {
  fs.readFile("./template/showBlog.html", "utf-8", function(error, contents) {
    if (error) {
      response.writeHead(500, {"Content-Type": "application/json"});
      response.write(JSON.stringify({"data": null}));
      response.end();
      console.log("Get blog detail error: " + error);
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(contents.replace("{{id}}", request.params.blogId));
      response.end();
      console.log("Get blog detail: " + request.params.blogId);
    }
  });
}

exports.getIndex = getIndex;
exports.getCSSTemplate = getCSSTemplate;
exports.getCreateBlog = getCreateBlog;
exports.getUpdateBlog = getUpdateBlog;
exports.getBlog = getBlog;
