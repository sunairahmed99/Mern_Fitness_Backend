const express = require("express");
const {
  FitnessProgresscreate,
  FitnessProgressall,
  FitnessProgressupdate,
  FitnessProgressdelete,
} = require("../Controllers/FitnessProgressController");

const FitnessProgressRouter = express.Router();
FitnessProgressRouter.route("/Add").post(FitnessProgresscreate);
FitnessProgressRouter.route("/All").get(FitnessProgressall);
FitnessProgressRouter.route("/Update/:id").put(FitnessProgressupdate);
FitnessProgressRouter.route("/Delete/:id").delete(FitnessProgressdelete);

module.exports = FitnessProgressRouter;
