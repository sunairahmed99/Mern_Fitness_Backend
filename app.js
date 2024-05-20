const express = require('express')
const app = express()
const path = require('path')
const ErrorController = require('./Controllers/ErrorController')
const AppError = require('./Utils/AppError')
const UserRouter = require('./Routes/UserRouter')
const WorkoutRouter = require('./Routes/WorkerRouter')
const NutritionRouter = require('./Routes/NutritionRouter')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/Users', express.static('./Multer/images/Users'))




app.use('/user',UserRouter)
app.use('/workout', WorkoutRouter)
app.use('/nutrition', NutritionRouter)


app.use('*', (req,res,next)=>{

    next(new AppError('invalid route',404))
})


app.use(ErrorController)


module.exports = app