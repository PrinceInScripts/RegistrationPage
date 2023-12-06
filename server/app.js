const express=require('express')
const authRouter = require('./routers/auth.routers')

const app=express()

app.use(express.json())

app.use('/api/auth',authRouter)

app.use('/',(req,res)=>{
    res.status(200).json({
        data:"Welcome to here..."
    })
})

module.exports=app