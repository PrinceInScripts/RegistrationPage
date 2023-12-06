const express=require('express')
const { signup, signin, getUser } = require('../controllers/auth.controllers')
const jwtAuth = require('../middleware/auth.middleware')
const authRouter=express.Router()


authRouter.post('/signup',signup)
authRouter.post('/signin',signin)
authRouter.get('/user',jwtAuth,getUser)


module.exports=authRouter