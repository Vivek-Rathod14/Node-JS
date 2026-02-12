const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    bookname: {
      type: String,
    },
    author: {
      type: String,
    },
    publisher: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    img: {
      type: String,
    }
  }

);

module.exports = mongoose.model("Movie", movieSchema);
