const User = require("../models/user");

module.exports.profile = function (req, res) {
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, function (err, user) {
      if (user) {
        res.render("user", {
          title: "User Profile",
          user: user,
        });
      } else {
        return res.redirect("/users/sign-up");
      }
    });
  } else {
    return res.redirect("/users/sign-in");
  }
};

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

//create user profile

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

// sing-in user

module.exports.createSession = function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user");
      return;
    }
    // handle user found
    if (user) {
      // handle password dosent match
      if (user.password != req.body.password) {
        return res.redirect("back");
      }
      // handle sesstion creation
      res.cookie("user_id", user._id);
      return res.redirect("/users/profile");
    } else {
      // handle if user is not found
      res.redirect("back");
    }
  });
};

module.exports.deleteSession = function (req, res) {
  res.clearCookie("user_id");
  return res.redirect("/users/sign-in");
};
