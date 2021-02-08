const Article = require("../model/article");

module.exports = {
    save: (articleData) => {
        const article = new Article(articleData);
        return article.save();
    },

    getArticleFeed: (page) => {
        let numberOfItemOnOnePage = 15;
        return Article.find({})
            .skip(page * numberOfItemOnOnePage)
            .limit(numberOfItemOnOnePage);
    },

    findArticleByIDAndPopulate: (articleID) => {
        return Article.findById(articleID).populate("userInfo", {
            email: 1,
            name: 1,
        });
    },
};
