const express = require('express');
const { RegisterUser, loginUser, protect, forgotpass, resetpass, getuser, updateprofile, updatepassword, getalluser, deluser } = require('../Controllers/AuthController');
const Userupload = require('../Multer/Multer');

const UserRouter = express.Router()

UserRouter.route('/getuser').get(protect,getuser)
UserRouter.route('/getall').get(protect,getalluser)
UserRouter.route('/del/:id').delete(protect,deluser)
UserRouter.route('/register').post(Userupload.single('image'),RegisterUser)
UserRouter.route('/login').post(loginUser)
UserRouter.route('/updatepassword').patch(protect,updatepassword)
UserRouter.route('/protect').post(protect)
UserRouter.route('/update/password').patch(protect,updatepassword)
UserRouter.route('/forgotpass').post(forgotpass)
UserRouter.route('/resetpass/:token').patch(resetpass)
UserRouter.route('/update/:id').patch(protect,Userupload.single('image'),updateprofile)

module.exports = UserRouter