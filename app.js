const express = require('express')
const ErrorController = require('./Controllers/ErrorController')
const AppError = require('./Utils/AppError')
const UserRouter = require('./Routes/UserRouter')
const WorkoutRouter = require('./Routes/WorkerRouter')
const NutritionRouter = require('./Routes/NutritionRouter')


const app = express()

app.use(express.json())


app.use('/user',UserRouter)
app.use('/workout', WorkoutRouter)
app.use('/nutrition', NutritionRouter)


app.use('*', (req,res,next)=>{

    next(new AppError('invalid route',404))
})


app.use(ErrorController)


module.exports = app