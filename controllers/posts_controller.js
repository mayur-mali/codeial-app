const Post = require("../models/post");

module.exports.singlepost = function (req, res) {
  return res.end("<h1>single post</h1>");
};

module.exports.createpost = function (req, res) {
  if (req.body.content.length > 0) {
    Post.create(
      {
        content: req.body.content,
        user: req.user._id,
      },
      function (err, post) {
        if (err) {
          console.log("something wrong while creating post");
          return;
        }
        return res.redirect("/");
      }
    );
  } else {
    return res.redirect("/");
  }
};
