const app=require('./app')

const PORT=process.env.MONGO_URl || 5001

app.listen(PORT,()=>{
    console.log(`Server connecting at http://.localhost:${PORT}`);
})