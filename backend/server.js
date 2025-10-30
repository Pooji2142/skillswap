// backend/server.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Allow only localhost frontend (for local use)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/messages", messageRoutes);

// ✅ TEST route
app.get("/", (req, res) => {
  res.send("✅ SkillSwap Backend running locally");
});

// ✅ MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Local Server running at http://localhost:${PORT}`));
