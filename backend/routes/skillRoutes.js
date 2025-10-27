import express from "express";
import Skill from "../models/Skill.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ➕ Add Skill
router.post("/", protect, async (req, res) => {
  try {
    const { skillName, description, level } = req.body;
    if (!skillName) return res.status(400).json({ message: "Skill name is required" });

    const skill = await Skill.create({
      user: req.user._id,
      skillName,
      description,
      level,
    });

    res.status(201).json(skill);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 👤 My Skills
router.get("/my", protect, async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user._id });
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🌍 Explore (Exclude own)
router.get("/", protect, async (req, res) => {
  try {
    const skills = await Skill.find({ user: { $ne: req.user._id } })
      .populate("user", "name email");
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✏️ Update Skill
router.put("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    if (skill.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    const { skillName, description, level } = req.body;
    skill.skillName = skillName || skill.skillName;
    skill.description = description || skill.description;
    skill.level = level || skill.level;
    await skill.save();

    res.json({ message: "Skill updated", skill });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ❌ Delete Skill
router.delete("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    if (skill.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    await skill.deleteOne();
    res.json({ message: "Skill deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
