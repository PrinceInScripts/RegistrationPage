const express=require('express')
const authRouter = require('./routers/auth.routers')
const dataBaseConnect = require('./config/db.config')
const cookieParser=require('cookie-parser')

const app=express()

app.use(express.json())
app.use(cookieParser())

dataBaseConnect()

app.use('/api/auth',authRouter)

app.use('/',(req,res)=>{
    res.status(200).json({
        data:"Welcome to here..."
    })
})

module.exports=app