const express = require("express");
const {
  FitnessProgresscreate,
  FitnessProgressall,
  FitnessProgressupdate,
  FitnessProgressdelete,
  FitnessProgressget,
  FitnessProgressalladmin,
} = require("../Controllers/FitnessProgressController");
const { protect } = require("../Controllers/AuthController");

const FitnessProgressRouter = express.Router();
FitnessProgressRouter.route("/Add").post(protect,FitnessProgresscreate);
FitnessProgressRouter.route("/get/:id").get(protect,FitnessProgressget);
FitnessProgressRouter.route("/All").get(protect,FitnessProgressall);
FitnessProgressRouter.route("/Alladmin").get(protect,FitnessProgressalladmin);
FitnessProgressRouter.route("/Update/:id").patch(protect,FitnessProgressupdate);
FitnessProgressRouter.route("/Delete/:id").delete(protect,FitnessProgressdelete);

module.exports = FitnessProgressRouter;
