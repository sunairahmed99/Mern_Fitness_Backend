const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  set: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  category: {
    strength: {
      type: Number,
      required: true,
    },
    cardio: {
      type: Number,
      required: true,
    },
  },
  createdate: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
