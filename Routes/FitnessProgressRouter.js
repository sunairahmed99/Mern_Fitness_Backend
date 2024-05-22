const express = require("express");
const {
  FitnessProgresscreate,
  FitnessProgressall,
  FitnessProgressupdate,
  FitnessProgressdelete,
  FitnessProgressget,
} = require("../Controllers/FitnessProgressController");
const { protect } = require("../Controllers/AuthController");

const FitnessProgressRouter = express.Router();
FitnessProgressRouter.route("/Add").post(protect,FitnessProgresscreate);
FitnessProgressRouter.route("/get/:id").get(protect,FitnessProgressget);
FitnessProgressRouter.route("/All").get(FitnessProgressall);
FitnessProgressRouter.route("/Update/:id").patch(FitnessProgressupdate);
FitnessProgressRouter.route("/Delete/:id").delete(FitnessProgressdelete);

module.exports = FitnessProgressRouter;
