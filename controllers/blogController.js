import Blog from "../models/Blog.js";

// Create a new blog (JSON only)
export const createBlog = async (req, res) => {
  try {
    const { title, text, image } = req.body; // JSON fields
    if (!title || !text) {
      return res.status(400).json({ message: "Title and text are required" });
    }

    const blog = new Blog({ title, text, image });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
