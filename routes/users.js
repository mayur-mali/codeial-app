const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_controller");

router.get("/sign-up", userController.signUp);
router.get("/sign-in", userController.signIn);
router.get("/profile", userController.profile);
router.post("/create", userController.create);
router.post("/create-sesstion", userController.createSession);
router.get("/logout", userController.deleteSession);

module.exports = router;
