const express = require("express");
const {
  Workoutcreate,
  Workoutupdate,
  Workoutdelete,
  Workoutall,
} = require("../Controllers/WorkoutController");

const WorkoutRouter = express.Router();
WorkoutRouter.route("/Add").post(Workoutcreate);
WorkoutRouter.route("/All").get(Workoutall);
WorkoutRouter.route("/Update/:id").put(Workoutupdate);
WorkoutRouter.route("/Delete/:id").delete(Workoutdelete);

module.exports = WorkoutRouter;
