const Article = require("../model/article");

module.exports = {
  save: async (articleData) => {
    try {
      const article = new Article(articleData);
      return await article.save();
    } catch (error) {
      return error;
    }
  },

  getArticleFeed: async (page) => {
    try {
        let numberOfItemOnOnePage = 15;
        return await Article.find({}).skip(page*numberOfItemOnOnePage).limit(numberOfItemOnOnePage);
    } catch (error) {
        return error;
    }
  },
};
