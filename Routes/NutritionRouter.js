const express = require('express');
const { Nutritioncreate } = require('../Controllers/NutritionController');

const WorkoutRouter = express.Router()
WorkoutRouter.route('/Add').post(Nutritioncreate)
// WorkoutRouter.route('/Update/:id').put(Workoutupdate)
// WorkoutRouter.route('/Delete/:id').delete(Workoutdelete)



module.exports = WorkoutRouter

