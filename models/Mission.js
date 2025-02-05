
import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  missionName: { type: String, required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: "Planet", required: true },
  launchDate: { type: Date, required: true }
});

const Mission = mongoose.model("Mission", missionSchema);
export default Mission;
