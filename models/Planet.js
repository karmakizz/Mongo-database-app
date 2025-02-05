import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  name: { type: String },
  orderFromSun: { type: Number },
  hasRings: { type: Boolean },
  mainAtmosphere: { type: [String], default: [] },
  surfaceTemperatureC: {
    min: { type: Number },
    max: { type: Number },
    mean: { type: Number },
  }
});

const Planet = mongoose.model("Planet", planetSchema);
export default Planet;
