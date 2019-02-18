const mongoose = require("mongoose");

const server = require("./server");
const route = require("./route");
const apiRequestHandlers = require("./requestHandlers/apiReqeustHandlers");
const pageReqeustHandlers = require("./requestHandlers/pageReqeustHandlers");

const API_PREFIX = "/api/";

// Request routing
var handle = {
  "GET": {},
  "POST":{},
  "PUT": {},
  "DELETE": {},
};

handle["GET"]['/'] = pageReqeustHandlers.getIndex;
handle["GET"]['/create_blog'] = pageReqeustHandlers.getCreateBlog;
handle["GET"]['/update_blog/:blogId'] = pageReqeustHandlers.getUpdateBlog;
handle["GET"]['/blog/:blogId'] = pageReqeustHandlers.getBlog;
handle["GET"]['/css'] = pageReqeustHandlers.getCSSTemplate;

handle["GET"][API_PREFIX + "blog"] = apiRequestHandlers.getBlogs;
handle["GET"][API_PREFIX + "blog/:blogId"] = apiRequestHandlers.getBlogDetail;
handle["POST"][API_PREFIX + "blog"] = apiRequestHandlers.createBlog;
handle["PUT"][API_PREFIX + "blog/:blogId"] = apiRequestHandlers.updateBlog;
handle["DELETE"][API_PREFIX + "blog/:blogId"] = apiRequestHandlers.deleteBlog;

// DB
mongoose.connect("mongodb://localhost:27017/personalBlogDB");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.start(handle);
