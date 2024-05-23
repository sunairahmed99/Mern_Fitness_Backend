const express = require("express");
const {
  Workoutcreate,
  Workoutupdate,
  Workoutdelete,
  Workoutall,
} = require("../Controllers/WorkoutController");
const { protect } = require("../Controllers/AuthController");

const WorkoutRouter = express.Router();
WorkoutRouter.route("/Add").post(protect,Workoutcreate);
WorkoutRouter.route("/All").get(protect,Workoutall);
WorkoutRouter.route("/Update/:id").put(protect,Workoutupdate);
WorkoutRouter.route("/Delete/:id").delete(protect,Workoutdelete);

module.exports = WorkoutRouter;
