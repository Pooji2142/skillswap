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

// ✅ CORS setup — allow both local & deployed frontend
app.use(
  cors({
    origin: [
      "http://localhost:3000",                   // local React dev
      "https://skill-swap-project.netlify.app",  // your deployed frontend on Netlify
    ],
    credentials: true,
  })
);

// ✅ ROUTES (all prefixed with /api)
app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/messages", messageRoutes);

// ✅ TEST route to confirm server works
app.get("/", (req, res) => {
  res.send("✅ SkillSwap Backend is running successfully 🚀");
});

// ✅ CONNECT MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ START SERVER (local only)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running locally at http://localhost:${PORT}`)
);

// ✅ Export for Vercel deployment
export default app;
