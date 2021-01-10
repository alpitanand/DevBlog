const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      ref: "User",
      required: true
    },
    tags: [{ type: String }],
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "lastUpdatedAt" } }
);

module.exports = mongoose.model("Article", ArticleSchema);
