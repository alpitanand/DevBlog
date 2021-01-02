const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    textPreview: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
    tags: [{ type: String }],
    date_of_joining: {
      type: Date,
      default: Date.now,
    },
    articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "lastUpdatedAt" } }
);

module.exports = mongoose.model("Article", ArticleSchema);
