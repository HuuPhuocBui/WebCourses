const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: String,
  title: String,
  rating: Number,
  reviews: Number,
  students: Number,
  coursesCount: Number,
  avatar: String,
  bio: [String]
});

module.exports = mongoose.model("Instructor", instructorSchema);
