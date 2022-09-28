const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.get("/singlepost", postsController.singlepost);
router.post("/createpost", postsController.createpost);

module.exports = router;
