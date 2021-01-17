const { Router } = require("express");
const router = Router();
const { getNewsfeed, writeArticle, readArticle } = require("../service/feedService");
const { auth } = require("../middleware/index");

router.get("/newsFeed", getNewsfeed);
router.post("/createArticle", auth, writeArticle);
router.get("/newsFeed/:articleID", readArticle);


module.exports = router;
