const SupportSystem = require("../Models/SupportSystemSchema");
const tryCatch = require("../Utils/tryCatch");

exports.SupportSystemcreate = tryCatch(async (req, res, next) => {
  const { userId, type, description, priority } = req.body;

  if (!userId || !type || !description || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const supportsystem = await SupportSystem.create({
    userId,
    type,
    description,
    priority,
  });

  res.status(201).json({
    status: "success",
    data: supportsystem,
  });
});

exports.SupportSystemall = tryCatch(async (req, res, next) => {
  const supports = await SupportSystem.find();
  res.status(200).json({ success: true, data: supports });
});