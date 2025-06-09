const Course = require("../models/course");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error loading courses" });
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Error loading course", error: err.message });
  }
};

exports.getCourseContentById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).select("content");
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course.content);
  } catch (err) {
    res.status(500).json({ message: "Error loading course content", error: err.message });
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructorId");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Error loading course", error: err.message });
  }
}
