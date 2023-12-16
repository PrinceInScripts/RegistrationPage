const express=require('express')
const authRouter = require('./routers/auth.routers')
const dataBaseConnect = require('./config/db.config')
const cookieParser=require('cookie-parser')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "https://registration-page-lyart.vercel.app",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));
  
  
dataBaseConnect()

app.use('/api/auth',authRouter)

app.use('/',(req,res)=>{
    res.status(200).json({
        data:"Welcome to here..."
    })
})

module.exports=app