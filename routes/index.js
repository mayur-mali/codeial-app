const express = require("express");
const homeController = require("../controllers/home_controller");
const router = express.Router();

router.get("/", homeController.home);
router.get("/contact", homeController.contact);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));

module.exports = router;