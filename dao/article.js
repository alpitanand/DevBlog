const Article = require("../model/article");

module.exports = {
    save: async (articleData) => {
        const article = new Article(articleData);
        return article.save();
    },

    getArticleFeed: async (page) => {
        let numberOfItemOnOnePage = 15;
        return Article.find({})
            .skip(page * numberOfItemOnOnePage)
            .limit(numberOfItemOnOnePage);
    },

    findArticleByIDAndPopulate: async (articleID) => {
        return Article.findById(articleID).populate("userInfo", {
            email: 1,
            name: 1,
        });
    },
};
