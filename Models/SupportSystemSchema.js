const mongoose = require("mongoose");

const supportsystemSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  type: {
    type: String,
    enum: ["assistance", "issue", "feedback"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
});

module.exports = mongoose.model("SupportSystem", supportsystemSchema);
