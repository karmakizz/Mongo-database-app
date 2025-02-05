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

// PATCH update a planet
router.patch("/:id", async (req, res) => {
  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlanet) {
      return res.status(404).json({ message: "Planet not found" });
    }
    res.json(updatedPlanet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//DELETE a planet


export default router;
