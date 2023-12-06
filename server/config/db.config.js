const mongoose=require('mongoose')

const MONGODB_URl=process.env.MONGO_URl || "mongodb://localhost:27017"

const dataBaseConnect=()=>{
   mongoose
   .connect(MONGODB_URl)
   .then((conn)=>console.log(`Connected to ${conn.connection.host}`))
   .catch((e)=>console.log(e.message))
}

module.exports =dataBaseConnect;