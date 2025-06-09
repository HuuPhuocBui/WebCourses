const Instructor = require("../models/instructor");

// Lấy tất cả giảng viên
exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ message: "Error loading instructors" });
  }
};

// Lấy giảng viên theo ID
exports.getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ message: "Error loading instructor", error: err.message });
  }
};
