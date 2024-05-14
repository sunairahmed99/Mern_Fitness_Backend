const users = require("../Models/UserSchema");
const AppError = require("../Utils/AppError");
const EmailSend = require("../Utils/ForgotEmail");
const tryCatch = require("../Utils/tryCatch");
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


exports.RegisterUser = tryCatch(async(req,res,next)=>{

    const newuser = await users.create({

        name:req.body.name,
        email:req.body.email,
        image:req.body.image,
        password:req.body.password,
        conform_password:req.body.conform_password
    })

    let token = jwt.sign({id:newuser.id},process.env.SECRET_KEY,{
        expiresIn:process.env.Expires_In
    })

    res.status(200).json({
        status:"success",
        token,
        data:newuser
    })
})

exports.loginUser = tryCatch(async(req,res,next)=>{

    const {email, password} = req.body

    if(!email || !password){
        return next(new AppError('email password wrong',404))
    }

    let user = await users.findOne({email:email}).select('password')

    if(!user){
        return next(new AppError('invalid email and passwrod',404))
    }

    if(!(await user.checkpassword(password,user.password))){

        return next(new AppError('invalid email and password',404))
    }

    let currentuser = await users.findById(user.id)


    let token = jwt.sign({id:currentuser.id},process.env.SECRET_KEY,{
        expiresIn:process.env.Expires_In
    })

    res.status(200).json({
        status:"success",
        token,
        data:currentuser
    })
})

exports.protect = tryCatch(async(req,res,next)=>{

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        token = req.headers.authorization.split(' ')[1]
    }
    if(!token){
        return next(new AppError('user not login',404))
    }

    let decode = jwt.verify(token,process.env.SECRET_KEY)

    let olduser = await users.findById(decode.id)

    if(!olduser.checkupdatepassword(decode.iat)){
        return next(new AppError('please login again',404))
    }

    req.user = olduser

    console.log(olduser)
})

exports.forgotpass = tryCatch(async(req,res,next)=>{

    let email = req.body.email

    if(!email){
        return next(new AppError('please provide email',404))
    }

    let user = await users.findOne({email:email})

    if(!user){
        return next(new AppError('email not found',404))
    }

    let token = user.passwordresettoken()

    await user.save({validateBeforeSave:false})

    let reseturl = `${req.protocol}://${req.get('host')}/reset/password/${token}`

    let message = `copy this link and open in  bowser to change password:${reseturl}`

    try{

       await EmailSend({

            user:user.email,
            subject:'forgot password link',
            text:message,
        })

        res.status(200).json({
            status:"success"
        })

    }catch(error){

        user.passwordResetToken = undefined
        user.passwordResetExpire = undefined
        await user.save()
        console.log(error)
    }
})

exports.resetpass = tryCatch(async(req,res,next)=>{

    let token = req.params.token

    if(!token){
        return next(new AppError('invalid route',404))
    }

    let hashtoken = crypto.createHash('sha256').update(token).digest('hex')

    let user = await users.findOne({passwordResetToken:hashtoken, passwordResetExpire:{$gt:Date.now()}})

    if(!user){
        users.passwordResetToken = undefined
        users.passwordResetExpire= undefined
        await user.save()
        return next(new AppError('token expired please login again'))
    }

    user.password = req.body.password
    user.conform_password = req.body.conform_password
    await user.save()

    let jwttoken = jwt.sign({id:user.id},process.env.SECRET_KEY,{
        expiresIn:process.env.Expires_In
    })

    res.status(200).json({
        status:"success",
        jwttoken,
    })

})