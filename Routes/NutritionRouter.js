const express = require('express');
const { Nutritioncreate, Nutritiondelete } = require('../Controllers/NutritionController');

const NutritionRouter = express.Router()
NutritionRouter.route('/Add').post(Nutritioncreate)
// WorkoutRouter.route('/Update/:id').put(Workoutupdate)
NutritionRouter.route('/Delete/:id').delete(Nutritiondelete)



module.exports = NutritionRouter

