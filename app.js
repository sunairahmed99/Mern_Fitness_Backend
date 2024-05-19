const express = require('express')
const ErrorController = require('./Controllers/ErrorController')
const AppError = require('./Utils/AppError')
const UserRouter = require('./Routes/UserRouter')
const WorkoutRouter = require('./Routes/WorkoutRouter')
const NutritionRouter = require('./Routes/NutritionRouter')
const FitnessProgressRouter = require('./Routes/FitnessProgressRouter')
const SupportSystemRouter = require('./Routes/SupportSystemRouter')


const app = express()

app.use(express.json())


app.use('/user',UserRouter)
app.use('/workout', WorkoutRouter)
app.use('/nutrition', NutritionRouter)
app.use('/fitnessprogress', FitnessProgressRouter)
app.use('/supportsystem', SupportSystemRouter)



app.use('*', (req,res,next)=>{

    next(new AppError('invalid route',404))
})


app.use(ErrorController)


module.exports = app