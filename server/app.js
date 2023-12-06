const express=require('express')
const authRouter = require('./routers/auth.routers')
const dataBaseConnect = require('./config/db.config')

const app=express()

app.use(express.json())

dataBaseConnect()

app.use('/api/auth',authRouter)

app.use('/',(req,res)=>{
    res.status(200).json({
        data:"Welcome to here..."
    })
})

module.exports=app