module.exports.users = function (req, res) {
  return res.end("<h1>this is user route</h1>");
};

module.exports.newusers = function (req, res) {
  return res.end("<h1>added new user</h1>");
};
