const express = require("express");
const router = express.Router();
const {
  getAllInstructors,
  getInstructorById
} = require("../controller/instructor");

router.get("/", getAllInstructors);
router.get("/:id", getInstructorById);

module.exports = router;
