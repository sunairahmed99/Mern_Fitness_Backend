const express = require('express')
const ErrorController = require('./Controllers/ErrorController')
const AppError = require('./Utils/AppError')
const UserRouter = require('./Routes/UserRouter')
const app = express()

app.use(express.json())


app.use('/user',UserRouter)


app.use('*', (req,res,next)=>{

    next(new AppError('invalid route',404))
})


app.use(ErrorController)


module.exports = app