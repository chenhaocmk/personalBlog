var server = require("./server");
var route = require("./route");
var requestHandlers = require("./requestHandlers");

const API_PREFIX = "/";
var handle = {};

handle[API_PREFIX + 'blog_list'] = requestHandlers.getBlogs;
// handle[API_PREFIX + 'blog'] = requestHandlers.getBlogDetail;
// handle[API_PREFIX + '']

server.start(handle);
