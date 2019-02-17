const blog = require("./models/blog");

function getBlogs(request, response) {
  blog.BlogModel.find()
  .sort({m_time: -1})
  .select("_id subject c_time m_time")
  .exec(
    function(error, blogs) {
      if (error) {
        response.writeHead(500, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": null}));
        response.end();
        console.log("Get blog list failed " + error);
      }
      else {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": blogs}));
        response.end();
        console.log("Get blog list successfully");
      }
    }
  );
}

function getBlogDetail(request, response) {
  blog.BlogModel.findById(request.params.blogId).
  exec(
    function(error, blogDetail) {
      if (error || !blogDetail) {
        response.writeHead(404, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": "blog not found"}));
        response.end();
        console.log("Get blog detail failed: " + request.params.blogId + " " +
          error);
      }
      else {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": blogDetail}));
        response.end();
        console.log("Get blog detail successfully: " + request.params.blogId);
      }
    }
  );
}

function createBlog(request, response) {
  var blogInstance = new blog.BlogModel({
    subject: request.body.subject,
    content: request.body.content,
    c_time: Date.now(),
    m_time: Date.now(),
  });
  blogInstance.save(function(error) {
      if (error) {
        response.writeHead(500, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": null}));
        response.end();
        console.log("Post blog detail failed " + error);
      }
      else {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": null}));
        response.end();
        console.log("Post blog successfully: " + blogInstance._id);
      }
    }
  );
}

function updateBlog(request, response) {
  blog.BlogModel.findById(request.params.blogId).
  exec(
    function(error, blogDetail) {
      if (error || !blogDetail) {
        response.writeHead(404, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": "blog not found"}));
        response.end();
        console.log("Upadte blog detail failed: " + request.params.blogId +
          " " + error);
      }
      else {
        blogDetail.content = request.body.content;
        blogDetail.subject = request.body.subject;
        blogDetail.m_time = Date.now();
        blogDetail.save(
          function(err, _) {
            if (err) {
              response.writeHead(500, {"Content-Type": "application/json"});
              response.write(JSON.stringify({"data": "blog update failed "}));
              response.end();
              console.log("Upadte blog detail failed: " + request.params.blogId
                + " " + error);
            } else {
              response.writeHead(200, {"Content-Type": "application/json"});
              response.write(JSON.stringify({"data": null}));
              response.end();
              console.log("Update blog successfully: " + request.params.blogId);
            }
          }
        );
      }
    }
  );
}

function deleteBlog(request, response) {
  blog.BlogModel.remove({_id: request.params.blogId}, function(error) {
      if (error) {
        response.writeHead(404, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": "blog not found"}));
        response.end();
        console.log("Delete blog detail failed: " + request.params.blogId +
          " " + error);
      }
      else {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({"data": null}));
        response.end();
        console.log("Delete blog successfully: " + request.params.blogId);
      }
    }
  );
}


exports.getBlogs = getBlogs;
exports.getBlogDetail = getBlogDetail;
exports.createBlog = createBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;
