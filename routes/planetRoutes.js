import express from "express";
import Planet from "../models/planet.js";

const router = express.Router();

// GET all planets
router.get("/", async (_req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
