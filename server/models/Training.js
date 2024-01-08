import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
  traineeName: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
  day: {
    type: String,
    required: true,
    enum: ["monday", "wednesday", "friday"]
  },
  date: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

const Training = mongoose.model("Training", trainingSchema);

export default Training;
