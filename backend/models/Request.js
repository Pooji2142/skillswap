import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    learner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    skill: { type: mongoose.Schema.Types.ObjectId, ref: "Skill" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    message: String,
    meetingLink: String,
    meetingTime: { type: Date },             // new field for meeting datetime
    teacherContactInfo: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Request", requestSchema);

