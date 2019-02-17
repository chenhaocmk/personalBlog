const mongoose = require("mongoose");

const server = require("./server");
const route = require("./route");
const requestHandlers = require("./requestHandlers");

const API_PREFIX = "/api/";

// Request routing
var handle = {
  "GET": {},
  "POST":{},
  "PUT": {},
  "DELETE": {},
};

handle["GET"][API_PREFIX + "blog"] = requestHandlers.getBlogs;
handle["GET"][API_PREFIX + "blog/:blogId"] = requestHandlers.getBlogDetail;
handle["POST"][API_PREFIX + "blog"] = requestHandlers.createBlog;
handle["PUT"][API_PREFIX + "blog/:blogId"] = requestHandlers.updateBlog;
handle["DELETE"][API_PREFIX + "blog/:blogId"] = requestHandlers.deleteBlog;

// DB
mongoose.connect("mongodb://localhost:27017/personalBlogDB");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

server.start(handle);
