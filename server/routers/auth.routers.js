const express=require('express')
const { signup, signin, getUser, logout } = require('../controllers/auth.controllers')
const jwtAuth = require('../middleware/auth.middleware')
const authRouter=express.Router()


authRouter.post('/signup',signup)
authRouter.post('/signin',signin)
authRouter.get('/user',jwtAuth,getUser)
authRouter.get('/logout',jwtAuth,logout)

module.exports=authRouter