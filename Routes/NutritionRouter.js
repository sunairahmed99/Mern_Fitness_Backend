const express = require("express");
const {
  Nutritioncreate,
  Nutritiondelete,
  Nutritionall,
  Nutritionupdate,
  Nutritionget,
} = require("../Controllers/NutritionController");
const { protect } = require("../Controllers/AuthController");

const NutritionRouter = express.Router();
NutritionRouter.route("/Add").post(protect,Nutritioncreate);
NutritionRouter.route("/All").get(protect,Nutritionall);
NutritionRouter.route("/get/:id").get(protect,Nutritionget);
NutritionRouter.route("/Update/:id").patch(protect,Nutritionupdate);
NutritionRouter.route("/Delete/:id").delete(protect,Nutritiondelete);

module.exports = NutritionRouter;
