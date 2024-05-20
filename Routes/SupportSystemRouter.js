const express = require("express");
const {
  SupportSystemcreate,
  SupportSystemall,
} = require("../Controllers/SupportSystemController");

const SupportSystemRouter = express.Router();
SupportSystemRouter.route("/Add").post(SupportSystemcreate);
SupportSystemRouter.route("/All").get(SupportSystemall);

module.exports = SupportSystemRouter;
