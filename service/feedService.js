var { getArticleFeed, save } = require("../dao/article");
const _ = require("lodash");

module.exports = {
    getNewsfeed: async (req, res) => {
        try {
            let { page } = req.body;
            if (_.isEmpty(page)) {
                page = 0;
            }
            let articles = await getArticleFeed(page);
            return articles;
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg:
                    "Some error occured while getting news feed, please try again later",
            });
        }
    },

    writeArticle: async (req, res) => {
        let { title, text, tags } = req.body;
        let user = req.user;
        try {
            if (_.isEmpty(title) || _.isEmpty(text)) {
                return res
                    .status(400)
                    .json({ message: "Not all fields have been entered" });
            }
            if(title.length>20||title.length<5){
                return res
                    .status(400)
                    .json({ message: "Insufficiant title length" });
            }

            let textPreview = text.substring(0,30);
            let userId = user.userId;
            const article = {
              title,
              text,
              userId,
              textPreview,
              tags
            }

            let savedArticle = await save(article)
            if(savedArticle.errors){
                console.log(savedArticle.errors)
                return res.status(400).json(savedArticle._message);
            }
            return res.status(200).json(savedArticle);
        } catch (error) {
            return res.status(500).json({
                msg:
                    "Some error occured while saving article, please try again later",
            });
        }
    },
};
