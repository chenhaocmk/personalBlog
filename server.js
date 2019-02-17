const url = require("url");
const express = require("express");
const bodyParser = require("body-parser");

const route = require("./route");

function start(handle) {
    var app = express();
    var jsonParser = bodyParser.json();
    route.route(app, jsonParser, handle);

    app.listen(8888);
    console.log("Server has started.");
}

exports.start = start;
