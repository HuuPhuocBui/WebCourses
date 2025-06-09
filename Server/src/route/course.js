const express = require("express");
const router = express.Router();

const { getAllCourses, getCourseById, getCourseContentById} = require("../controller/course");


router.get("/", getAllCourses);
// ✅ GET chi tiết khóa học theo ID
router.get("/:id", getCourseById);

router.get("/:id/contents", getCourseContentById);


module.exports = router;
