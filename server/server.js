const dotenv=require('dotenv')
dotenv.config()
const app=require('./app')

const PORT=process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log(`Server connecting at http://localhost:${PORT}`);
})