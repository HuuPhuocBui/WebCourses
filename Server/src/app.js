const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const courseRoutes = require("./route/course");
const instructorRoutes = require("./route/instructor");
const userRoutes = require("./route/user");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);

app.use("/api/instructors", instructorRoutes);

app.use("/auth", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
       const PORT = process.env.PORT || 8000;
      console.log("✅ Server & MongoDB ready");
      console.log(`🚀 Listening at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ Mongo connect failed:", err.message));
