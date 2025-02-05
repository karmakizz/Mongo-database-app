import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  name: { type: String,required: true},
  orderFromSun: { type: Number,required: true },
  hasRings: { type: Boolean },
  mainAtmosphere: { type: [String], default: [] },
  surfaceTemperatureC: {
    min: { type: Number },
    max: { type: Number },
    mean: { type: Number },
  }
});
planetSchema.index({ name: 1 }); // Indexes the name field for faster queries

const Planet = mongoose.model("Planet", planetSchema);
export default Planet;
