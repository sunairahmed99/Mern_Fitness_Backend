const Progress = require("../Models/ProgressSchema");
const tryCatch = require("../Utils/tryCatch");

exports.FitnessProgresscreate = tryCatch(async (req, res, next) => {
  const { userId, weight, bodyMeasurements, performanceMetrics } = req.body;

  if (!userId || !weight || !bodyMeasurements || !performanceMetrics) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const progress = await Progress.create({
    userId,
    weight,
    bodyMeasurements: {
      waist: bodyMeasurements.waist,
      shoulder: bodyMeasurements.shoulder,
      arms: bodyMeasurements.arms,
      legs: bodyMeasurements.legs,
    },
    performanceMetrics: {
      runTime: performanceMetrics.runTime,
      liftingWeight: performanceMetrics.liftingWeight,
    },
  });

  res.status(201).json({
    status: "success",
    data: progress,
  });
});

exports.FitnessProgressall = tryCatch(async (req, res, next) => {
  const progress = await Progress.find().populate("userId");
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
  const { userId, weight, bodyMeasurements, performanceMetrics } = req.body;

  if (!userId || !weight || !bodyMeasurements || !performanceMetrics) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const progress = await Progress.findByIdAndUpdate(
    id,
    {
      userId,
      weight,
      bodyMeasurements: {
        waist: bodyMeasurements.waist,
        shoulder: bodyMeasurements.shoulder,
        arms: bodyMeasurements.arms,
        legs: bodyMeasurements.legs,
      },
      performanceMetrics: {
        runTime: performanceMetrics.runTime,
        liftingWeight: performanceMetrics.liftingWeight,
      },
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
