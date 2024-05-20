const express = require('express');
const { RegisterUser, loginUser, protect, forgotpass, resetpass, getuser, updateprofile } = require('../Controllers/AuthController');
const Userupload = require('../Multer/Multer');

const UserRouter = express.Router()

UserRouter.route('/getuser').get(protect,getuser)
UserRouter.route('/register').post(Userupload.single('image'),RegisterUser)
UserRouter.route('/login').post(loginUser)
UserRouter.route('/protect').post(protect)
UserRouter.route('/forgotpass').post(forgotpass)
UserRouter.route('/resetpass/:token').patch(resetpass)
UserRouter.route('/update/:id').patch(protect,Userupload.single('image'),updateprofile)

module.exports = UserRouter