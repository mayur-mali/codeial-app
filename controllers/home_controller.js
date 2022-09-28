const Post = require("../models/post");

module.exports.home = function (req, res) {
  Post.find({}, function (err, post) {
    if (err) {
      console.log(err);
      return;
    }
    return res.render("home", {
      post: post,
      title: "Home",
    });
  });
};

module.exports.home1 = function (req, res) {
  return res.redirect("/check");
};
