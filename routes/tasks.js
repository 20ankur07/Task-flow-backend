import express from "express";
import Task from "../models/Task.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET all tasks for the logged-in user
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(tasks);
});

// CREATE a task
router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;

  if (!title) return res.status(400).json({ message: "Title required" });

  const task = await Task.create({
    userId: req.userId,
    title,
    description
  });

  res.json(task);
});

// UPDATE a task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.userId.toString() !== req.userId)
    return res.status(403).json({ message: "Not allowed" });

  task.title = req.body.title ?? task.title;
  task.description = req.body.description ?? task.description;
  task.completed = req.body.completed ?? task.completed;

  await task.save();
  res.json(task);
});

// DELETE a task
router.delete("/:id", auth, async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.userId.toString() !== req.userId)
    return res.status(403).json({ message: "Not allowed" });

  await task.deleteOne();
  res.json({ message: "Deleted" });
});

export default router;
