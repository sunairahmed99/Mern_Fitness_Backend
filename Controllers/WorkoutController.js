const Workout = require("../Models/WorkoutSchema");
const tryCatch = require("../Utils/tryCatch");

exports.Workoutcreate = tryCatch(async (req, res, next) => {
  const workout = await Workout.create({
    name: req.body.name,
    set: req.body.set,
    reps: req.body.reps,
    weight: req.body.weight,
    category: req.body.category,
    userId: req.body.userId
  });
  res.status(200).json({
    status: "success",
    data: workout,
  });
});

exports.Workoutall = tryCatch(async (req, res, next)=>{
  const workouts = await Workout.find({id:req.user._id}).populate('userId');
  res.json(workouts);
})

exports.Workoutdelete = tryCatch(async (req, res, next) => {
  const workoutId = req.params.id;

  const deletedWorkout = await Workout.findByIdAndDelete(workoutId);

  if (!deletedWorkout) {
    return res.status(404).json({
      message: "Workout not found",
    });
  }

  res.json({
    message: "Workout deleted successfully",
    data: deletedWorkout,
  });
});

exports.Workoutupdate = tryCatch(async (req, res, next) => {
  const workoutId = req.params.id;

  const Workoutupdate = await Workout.findByIdAndUpdate(workoutId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: Workoutupdate,
  });
});
