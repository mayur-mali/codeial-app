module.exports.home = function (req, res) {
  return res.end("<h1>Hello world ! </h1>");
};

module.exports.contact = function (req, res) {
  return res.end("<h1>this is contact page</h1>");
};
