const express = require("express");
const {
  Nutritioncreate,
  Nutritiondelete,
  Nutritionall,
  Nutritionupdate,
} = require("../Controllers/NutritionController");

const NutritionRouter = express.Router();
NutritionRouter.route("/Add").post(Nutritioncreate);
NutritionRouter.route("/All").get(Nutritionall);
NutritionRouter.route("/Update/:id").put(Nutritionupdate);
NutritionRouter.route("/Delete/:id").delete(Nutritiondelete);

module.exports = NutritionRouter;
