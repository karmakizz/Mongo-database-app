import express from "express";
import Planet from "../models/Planet.js";


const router = express.Router();

// GET all planets
router.get("/", async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// POST a new planet
router.post("/", async (req, res) => {
  const planet = new Planet(req.body);
  try {
    const newPlanet = await planet.save();
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
