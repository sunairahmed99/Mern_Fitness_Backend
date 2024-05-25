const Progress = require("../Models/ProgressSchema");
const tryCatch = require("../Utils/tryCatch");

exports.FitnessProgresscreate = tryCatch(async (req, res, next) => {

  
  const progress = await Progress.create({
    userId:req.user._id,
    weight:req.body.weight,
    waist: req.body.waist,
    shoulder: req.body.shoulder,
    arms: req.body.arms,
    legs: req.body.legs,
    runTime: req.body.runTime,
    liftingWeight: req.body.liftinWeight
    ,
  });

  res.status(201).json({
    status: "success",
    data: progress,
  });
});

exports.FitnessProgressall = tryCatch(async (req, res, next) => {
  const progress = await Progress.find({userId:req.user._id}).populate("userId");
  res.json(progress);
});

exports.FitnessProgressalladmin = tryCatch(async (req, res, next) => {
  const progress = await Progress.find().populate("userId");
  res.json(progress);
});

exports.FitnessProgressget = tryCatch(async (req, res, next) => {
  const progress = await Progress.findById(req.params.id);
  res.json(progress);
});

exports.FitnessProgressdelete = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const progress = await Progress.findByIdAndDelete(id);

  if (!progress) {
    return res.status(404).json({ message: "Progress entry not found" });
  }

  res.status(200).json({
    status: "success",
    message: "Fitness Progress entry deleted successfully",
  });
});

exports.FitnessProgressupdate = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  
  const progress = await Progress.findByIdAndUpdate(
    id,
    {
      weight:req.body.weight,
      waist: req.body.waist,
      shoulder: req.body.shoulder,
      arms: req.body.arms,
      legs: req.body.legs,
      runTime: req.body.runTime,
      liftingWeight: req.body.liftinWeight
    },
    { new: true, runValidators: true }
  );

  if (!progress) {
    return res.status(404).json({ message: "Progress entry not found" });
  }

  res.status(200).json({
    status: "success",
    data: progress,
  });
});
