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
    enum: ["Monday", "Wednesday", "Friday"]
  },
  date: {
    type: String,
    required: true,
    enum: ["2", "5", "7", "9", "12", "14", "16", "19", "21", "23", "26", "28"]
  },
  cost: {
    type: String,
    required: true,
    enum: ["150"]
  }
});

const Training = mongoose.model("Training", trainingSchema);

export default Training;
