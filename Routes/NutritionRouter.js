const express = require("express");
const {
  Nutritioncreate,
  Nutritiondelete,
  Nutritionall,
  Nutritionupdate,
  Nutritionget,
  Nutritionalladmin,
} = require("../Controllers/NutritionController");
const { protect } = require("../Controllers/AuthController");

const NutritionRouter = express.Router();
NutritionRouter.route("/Add").post(protect,Nutritioncreate);
NutritionRouter.route("/All").get(protect,Nutritionall);
NutritionRouter.route("/Alladmin").get(protect,Nutritionalladmin);
NutritionRouter.route("/get/:id").get(protect,Nutritionget);
NutritionRouter.route("/Update/:id").patch(protect,Nutritionupdate);
NutritionRouter.route("/Delete/:id").delete(protect,Nutritiondelete);

module.exports = NutritionRouter;
