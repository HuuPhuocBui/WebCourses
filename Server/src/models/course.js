const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  previewable: { type: Boolean, default: false }
});

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lecturesCount: { type: Number, required: true },
  duration: { type: String, required: true },
  lectures: [lectureSchema]
});

const contentSchema = new mongoose.Schema({
  totalLectures: { type: Number, required: true },
  totalDuration: { type: String, required: true },
  sections: [sectionSchema]
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String },
  isBestSeller: { type: Boolean, default: false },
  content: contentSchema // ✅ THÊM VÀO ĐÂY
});

module.exports = mongoose.model("Course", courseSchema);

