const express = require('express');
const { RegisterUser, loginUser, protect, forgotpass, resetpass } = require('../Controllers/AuthController');

const UserRouter = express.Router()

UserRouter.route('/register').post(RegisterUser)
UserRouter.route('/login').post(loginUser)
UserRouter.route('/protect').post(protect)
UserRouter.route('/forgotpass').post(forgotpass)
UserRouter.route('/resetpass/:token').patch(resetpass)

module.exports = UserRouter