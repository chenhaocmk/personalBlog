var mongoose = require("mongoose");

var BlogSchema = new mongoose.Schema(
  {
    subject: {type: String, default:"No Subject"},
    content: {type: String, default:""},
    c_time: {type: Date, default: Date.now()},
    m_time: {type: Date, default: Date.now()},
  }, {_id: true}
);

var BlogModel = mongoose.model("blogModel", BlogSchema);
exports.BlogModel = BlogModel;
