const mongoose = require('mongoose');
const Validator = require('validator')
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const UserSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, 'name required']
    },
    phone:{
        type:Number,

    },
    email:{
        type:String,
        unique:true,
        required:[true, 'email required'],
        validate:[Validator.isEmail, 'invalid email syntax'],
    },
    image:{
        type:String,
    },
    role:{
        type:String,
        default:'user',
    },
    password:{
        type:String,
        required:[true, 'password required'],
        minlength:[4, 'password greater than 4 characters'],
        maxlength:[12, 'password less than 12 characters'],
        select:false
    },
    conform_password:{
        type:String,
        minlength:[4, 'password greater than 4 characters'],
        maxlength:[12, 'password less than 12 characters'],
        validate:{
            validator:function(val){
                return val === this.password
            },
            message:'conform password not match'
        }
    },
    passwordchangeDate:{
        type:Date
    },
    passwordResetToken:{
        type:String
    },
    passwordResetExpire:Date
})

UserSchema.pre('save',async function(next){
    
    if(!this.isModified('password')) return next()
      
    this.password = await bcrypt.hash(this.password, 12) 
    this.conform_password = undefined 
    console.log('pillay')
    next()
})

UserSchema.pre('save',async function(next){
    if(!this.isModified('password') || this.isNew) return next()
    
    this.passwordchangeDate = Date.now()  
    next()  
})

UserSchema.methods.checkpassword = async function(oldpassword,newpassword){

    return await bcrypt.compare(oldpassword,newpassword)
}

UserSchema.methods.checkupdatepassword = function(jwttime){

    if(this.passwordchangeDate){

        let date = parseInt(this.passwordchangeDate.getTime()/1000,10)

        return jwttime < date
    }

    return false
}

UserSchema.methods.passwordresettoken = function(){

    let token = crypto.randomBytes(16).toString('hex')

    this.passwordResetToken = crypto.createHash('sha256').update(token).digest('hex');

    this.passwordResetExpire = Date.now() + 10 * 60 * 1000

    return token
}

const users = mongoose.model('users', UserSchema)

module.exports = users