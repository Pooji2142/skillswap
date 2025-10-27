import express from "express";
import Message from "../models/Message.js";
import Request from "../models/Request.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Send a message
router.post("/:requestId", protect, async (req, res) => {
  try {
    const { requestId } = req.params;
    const { text } = req.body;

    const request = await Request.findById(requestId);
    if (!request) return res.status(404).json({ message: "Request not found" });
    if (request.status !== "approved")
      return res.status(403).json({ message: "Chat only allowed after approval" });

    const newMsg = new Message({
      request: requestId,
      sender: req.user._id,
      text,
    });

    await newMsg.save();
    res.status(201).json(newMsg);
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
});

// Get all messages for a request
router.get("/:requestId", protect, async (req, res) => {
  try {
    const { requestId } = req.params;
    const messages = await Message.find({ request: requestId })
      .populate("sender", "name email")
      .sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
});

export default router;
