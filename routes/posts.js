const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.get("/allposts", postsController.allposts);
router.get("/singlepost", postsController.singlepost);

module.exports = router;
