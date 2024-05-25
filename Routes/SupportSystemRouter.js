const express = require("express");
const {
  SupportSystemcreate,
  SupportSystemall,
  SupportSystemdel,
  SupportSystemalladmin,
} = require("../Controllers/SupportSystemController");
const { protect } = require("../Controllers/AuthController");

const SupportSystemRouter = express.Router();
SupportSystemRouter.route("/Add").post(protect,SupportSystemcreate);
SupportSystemRouter.route("/All").get(protect,SupportSystemall);
SupportSystemRouter.route("/Alladmin").get(protect,SupportSystemalladmin);
SupportSystemRouter.route("/Delete/:id").delete(protect,SupportSystemdel);

module.exports = SupportSystemRouter;
