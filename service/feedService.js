var {
    getArticleFeed,
    save,
    findArticleByIDAndPopulate,
} = require("../dao/article");
var { finduserByID } = require("../dao/user");
const _ = require("lodash");
var ObjectID = require("mongodb").ObjectID;
const Article = require("../model/article");

module.exports = {
    getNewsfeed: async (req, res) => {
        try {
            let { page } = req.body;
            if (_.isEmpty(page)) {
                page = 0;
            }
            let articles = await getArticleFeed(page);
          
            return res.status(200).json(articles);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:
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
            if (title.length > 20 || title.length < 5) {
                return res
                    .status(400)
                    .json({ message: "Insufficiant title length" });
            }

            let textPreview = text.substring(0, 30);
            let userInfo = user.userId;
            let userData = await finduserByID(userInfo);
            let author = userData.name;

            if (userData.errors) {
                console.log(userData.errors);
                return res
                    .status(400)
                    .json("Some error occured while saving the article");
            }
            const article = {
                title,
                text,
                userInfo,
                textPreview,
                tags,
                author
            };

            let savedArticle = await save(article);
           
            return res.status(200).json(savedArticle);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:
                    "Some error occured while saving article, please try again later",
            });
        }
    },

    readArticle: async (req, res) => {
        let articleID = req.params.articleID;
        try {
            if (!ObjectID.isValid(articleID)) {
                return res.status(400).json({ message: "Invalid URL" });
            }

            let article = await findArticleByIDAndPopulate(articleID);

            if (_.isEmpty(article)) {
                return res.status(400).json({
                    message: "Article may have been removed by Author",
                });
            }

            if (article.errors) {
                return res.status(400).json({
                    message:
                        "Some error occured while getting article, please try again later",
                });
            }

            return res.status(200).json({
                article,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:
                    "Some error occured while getting article, please try again later",
            });
        }
    },
};
