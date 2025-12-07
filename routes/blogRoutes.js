import express from "express";
import { createBlog, getAllBlogs, getBlogById } from "../controllers/blogController.js";

const router = express.Router();

router.post("/", createBlog);       // JSON: { title, text, image }
router.get("/", getAllBlogs);       // Get all blogs
router.get("/:id", getBlogById);    // Get blog by ID

export default router;
