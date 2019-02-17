function route(app, parser, handle) {
  for (method in handle) {
    for (pathName in handle[method]) {
      if (method === "GET") {
        app.get(pathName, handle[method][pathName]);
      } else if (method === "POST") {
        app.post(pathName, parser, handle[method][pathName]);
      } else if (method === "PUT") {
        app.put(pathName, parser, handle[method][pathName]);
      } else if (method === "DELETE") {
        app.delete(pathName, parser, handle[method][pathName]);
      }
    }
  }
}

exports.route = route
