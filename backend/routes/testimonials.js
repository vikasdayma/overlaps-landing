import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

// Get all testimonials
router.get("/", async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

// Add a new testimonial
router.post("/", async (req, res) => {
  const { name, role, text, image, rating } = req.body;
  try {
    const newTestimonial = await Testimonial.create({ name, role, text, image, rating });
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;