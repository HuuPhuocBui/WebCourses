const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: Number,
  reviews: Number,
  price: Number,
  oldPrice: Number,
  image: String,
  isBestSeller: Boolean,
});

module.exports = mongoose.model("Course", courseSchema);
