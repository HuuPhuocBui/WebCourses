const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    const access_token = jwt.sign(
      { id: newUser._id },
      process.env.SECRET_KEY || "SECRET_KEY",
      { expiresIn: "7d" }
    );

    res.status(201).json({ access_token });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Tài khoản không tồn tại' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mật khẩu không đúng' });
    }

    const access_token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'SECRET_KEY',
      { expiresIn: '7d' }
    );

    res.json({ access_token });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server', error: err.message });
  }
};

