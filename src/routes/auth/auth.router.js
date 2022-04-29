const express = require('express');
const authRouter = express.Router();
const authController = require('./auth.controller')
const { authCheck } = require('../../middlewares/auth.middleware')

authRouter.get('/signin', authController.renderSignIn);

authRouter.get('/signup', authController.renderSignUp);

authRouter.post('/signup', authController.signUp);

authRouter.post('/signin', authCheck, authController.signIn);

module.exports = authRouter;