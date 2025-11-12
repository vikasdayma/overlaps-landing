import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import testimonialRoutes from "./routes/testimonials.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("✅ MongoDB connected"));

// Routes
app.use("/api/testimonials", testimonialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));