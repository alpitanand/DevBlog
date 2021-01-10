const { Router } = require("express");
const router = Router();
const { getNewsfeed, writeArticle } = require("../service/feedService");
const { auth } = require("../middleware/index");

router.get("/newsFeed", getNewsfeed);
router.post("/createArticle", auth, writeArticle);

module.exports = router;
