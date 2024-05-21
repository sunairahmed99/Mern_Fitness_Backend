const mongoose = require("mongoose");

const nutritionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  foodType: 
    {
      type: String,
      required: true,
    },
  
  foodItem: 
    {
      type: [String],
      required: true,
    },
  
  quantity: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Nutrition = mongoose.model("Nutrition", nutritionSchema);

module.exports = Nutrition;
