module.exports.users = function (req, res) {
  return res.render("user", {
    title: "Users",
  });
};

module.exports.newusers = function (req, res) {
  return res.end("<h1>added new user</h1>");
};
