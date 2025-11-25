import express from "express";
import auth from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// GET PROFILE
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// UPDATE PROFILE (name + email)
router.put("/", auth, async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { name, email },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

export default router;
