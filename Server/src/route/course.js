const express = require("express");
const router = express.Router();
const { getAllCourses, getCourseById } = require("../controller/course");

router.get("/", getAllCourses);
// ✅ GET chi tiết khóa học theo ID
router.get("/:id", getCourseById);

module.exports = router;
