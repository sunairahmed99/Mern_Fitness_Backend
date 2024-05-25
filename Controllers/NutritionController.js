const tryCatch = require("../Utils/tryCatch");
const Nutrition = require("../ModelS/NutritionSchema");

exports.Nutritioncreate = tryCatch(async (req, res, next) => {
  const nutrition = await Nutrition.create({
    userId: req.user._id,
    foodItem: req.body.foodItem,
    foodType: req.body.foodType,
    quantity: req.body.quantity,
    protein: req.body.protein,
    calories: req.body.calories,
  });
  res.status(200).json({
    status: "success",
    data: nutrition,
  });
});

exports.Nutritionall = tryCatch(async (req, res, next) => {
  const nutritions = await Nutrition.find({userId:req.user._id}).populate('userId');
  res.json(nutritions);
});

exports.Nutritionalladmin = tryCatch(async (req, res, next) => {
  const nutritions = await Nutrition.find().populate('userId');
  res.json(nutritions);
});

exports.Nutritionget = tryCatch(async (req, res, next) => {
  const nutritions = await Nutrition.findById(req.params.id);
  res.json(nutritions);
});

exports.Nutritiondelete = tryCatch(async (req, res, next) => {
  const nutritionId = req.params.id;

  const deletedNutrition = await Nutrition.findByIdAndDelete(nutritionId);

  if (!deletedNutrition) {
    return res.status(404).json({
      message: "Nutrition not found",
    });
  }

  res.json({
    message: "Nutrition deleted successfully",
    data: deletedNutrition,
  });
});

exports.Nutritionupdate = tryCatch(async (req, res, next) => {
  const nutritionId = req.params.id;

  const Nutritionupdate = await Nutrition.findByIdAndUpdate(
    nutritionId,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: Nutritionupdate,
  });
});
