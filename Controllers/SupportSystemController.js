const SupportSystem = require("../Models/SupportSystemSchema");
const tryCatch = require("../Utils/tryCatch");

exports.SupportSystemcreate = tryCatch(async (req, res, next) => {
  
  
  const supportsystem = await SupportSystem.create({
    userId : req.user.id,
    type : req.body.stype,
    description : req.body.sdescription,
    priority : req.body.spriority,
  });

  res.status(201).json({
    status: "success",
    data: supportsystem,
  });
});

exports.SupportSystemall = tryCatch(async (req, res, next) => {
  const supports = await SupportSystem.find({userId:req.user._id}).populate('userId');
  res.status(200).json({ success: true, data: supports });
});

exports.SupportSystemalladmin = tryCatch(async (req, res, next) => {
  const supports = await SupportSystem.find().populate('userId');
  res.status(200).json({ success: true, data: supports });
});

exports.SupportSystemdel = tryCatch(async (req, res, next) => {
  const supports = await SupportSystem.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: supports });
});