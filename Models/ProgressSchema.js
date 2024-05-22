const mongoose = require("mongoose");

const fitnessprogressSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

    waist: {
      type: Number,
      required: true,
    },
    shoulder: {
      type: Number,
      required: true,
    },
    arms: {
      type: Number,
      required: true,
    },
    legs: {
      type: Number,
      required: true,
    },
    runTime: {
      type: Number,
      required: true,
    },
    liftingWeight: {
      type: Number,
      required: true,
    },
  createdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FitnessProgress", fitnessprogressSchema);
