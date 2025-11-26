import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tasksRoutes from "./routes/tasks.js";
import profileRoutes from "./routes/profile.js";




dotenv.config(); // Load .env file

const app = express();
app.use(cors({ origin: "https://task-flow-frontend-sooty.vercel.app", credentials: true }));

app.use((req, res, next) => {
  console.log(req.method, req.url, req.body);
  next();
});



app.use(express.json());
app.use("/auth", authRoutes);
app.use("/tasks", tasksRoutes);
app.use("/profile", profileRoutes);


// ⭐ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend running + MongoDB connected!");
});

import authRoutes from "./routes/auth.js";
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
