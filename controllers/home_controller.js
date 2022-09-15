module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Home",
  });
};

module.exports.home1 = function (req, res) {
  return res.redirect("/check");
};
