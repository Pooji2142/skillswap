import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    skillName: { type: String, required: true },
    description: String,
    level: String,
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
