module.exports.allposts = function (req, res) {
  return res.end("<h1>all posts</h1>");
};

module.exports.singlepost = function (req, res) {
  return res.end("<h1>single post</h1>");
};
