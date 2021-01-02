const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  date_of_joining: {
    type: Date,
    default: Date.now,
  },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
});

module.exports = mongoose.model("User", UserSchema);
