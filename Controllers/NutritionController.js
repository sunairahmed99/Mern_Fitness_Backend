const tryCatch = require("../Utils/tryCatch");
const Nutrition = require("../ModelS/NutritionSchema");

exports.Nutritioncreate = tryCatch(async (req, res, next) => {
  const nutrition = await Nutrition.create({
    userId: req.body.userId,
    foodItem: req.body.foodItem,
    foodType: req.body.foodType,
    quantity: req.body.quantity,
    protein: req.body.protein,
    calories: req.body.calories
  });
  res.status(200).json({
    status: "success",
    data: nutrition
  });
});
