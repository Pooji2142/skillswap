// import express from "express";
// import Request from "../models/Request.js";
// import Skill from "../models/Skill.js";
// import protect from "../middleware/authMiddleware.js";

// const router = express.Router();

// // 📨 Send Request
// router.post("/", protect, async (req, res) => {
//   try {
//     const { skillId, message } = req.body;
//     const skill = await Skill.findById(skillId).populate("user");

//     if (!skill) return res.status(404).json({ message: "Skill not found" });
//     if (skill.user._id.toString() === req.user._id.toString())
//       return res.status(400).json({ message: "You can't request your own skill" });

//     const existing = await Request.findOne({
//       learner: req.user._id,
//       skill: skill._id,
//       status: "pending",
//     });

//     if (existing)
//       return res.status(400).json({ message: "Request already sent" });

//     const newReq = await Request.create({
//       learner: req.user._id,
//       teacher: skill.user._id,
//       skill: skill._id,
//       message,
//     });

//     res.status(201).json(newReq);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // 📤 Learner: Sent Requests
// router.get("/sent", protect, async (req, res) => {
//   const requests = await Request.find({ learner: req.user._id })
//     .populate("teacher", "name email")
//     .populate("skill", "skillName");
//   res.json(requests);
// });

// // 📥 Teacher: Received Requests
// router.get("/received", protect, async (req, res) => {
//   const requests = await Request.find({ teacher: req.user._id })
//     .populate("learner", "name email")
//     .populate("skill", "skillName");
//   res.json(requests);
// });

// // ✅ Approve/Reject + Meeting Link
// router.put("/:id", protect, async (req, res) => {
//   try {
//     const { status, meetingLink } = req.body;
//     const request = await Request.findById(req.params.id);

//     if (!request) return res.status(404).json({ message: "Request not found" });
//     if (request.teacher.toString() !== req.user._id.toString())
//       return res.status(401).json({ message: "Not authorized" });

//     request.status = status || request.status;
//     request.meetingLink = meetingLink || request.meetingLink;
//     await request.save();

//     res.json({ message: `Request ${status}`, request });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;


import express from "express";
import Request from "../models/Request.js";
import Skill from "../models/Skill.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Send request
router.post("/", protect, async (req, res) => {
  try {
    const { skillId, message } = req.body;
    const skill = await Skill.findById(skillId).populate("user");

    if (!skill) return res.status(404).json({ message: "Skill not found" });
    if (skill.user._id.toString() === req.user._id.toString())
      return res.status(400).json({ message: "You can't request your own skill" });

    const existing = await Request.findOne({
      learner: req.user._id,
      skill: skill._id,
      status: "pending",
    });

    if (existing)
      return res.status(400).json({ message: "Request already sent" });

    const newReq = await Request.create({
      learner: req.user._id,
      teacher: skill.user._id,
      skill: skill._id,
      message,
    });

    res.status(201).json(newReq);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Sent requests by learner
router.get("/sent", protect, async (req, res) => {
  const requests = await Request.find({ learner: req.user._id })
    .populate("teacher", "name email")
    .populate("skill", "skillName");
  res.json(requests);
});

// Received requests for teacher
router.get("/received", protect, async (req, res) => {
  const requests = await Request.find({ teacher: req.user._id })
    .populate("learner", "name email")
    .populate("skill", "skillName");
  res.json(requests);
});

// Update request - approve/reject + meeting info
router.put("/:id", protect, async (req, res) => {
  try {
    const {
      status,
      meetingLink,
      meetingTime,
      teacherContactInfo,
    } = req.body;
    const request = await Request.findById(req.params.id);

    if (!request) return res.status(404).json({ message: "Request not found" });
    if (request.teacher.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    request.status = status || request.status;
    request.meetingLink = meetingLink || request.meetingLink;
    request.meetingTime = meetingTime ? new Date(meetingTime) : request.meetingTime;
    request.teacherContactInfo = teacherContactInfo || request.teacherContactInfo;

    await request.save();

    res.json({ message: `Request ${status}`, request });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
