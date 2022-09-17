const User = require("../models/user");

// module.exports.profile = function (req, res) {
//   return res.render("register", {
//     title: "reagister user",
//   });
// };

module.exports.signUp = function (req, res) {
  return res.render("sign-up", {
    title: "Codieal | sign up",
  });
};

module.exports.signIn = function (req, res) {
  return res.render("sign-in", {
    title: "Codieal | sing in",
  });
};

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user while sign up");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user");
          return;
        }
        res.redirect("/users/sign-in");
      });
    } else {
      res.redirect("back");
    }
  });
};
