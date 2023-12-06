const mongoose=require('mongoose')

const {Schema} =mongoose

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"User name is requires"],
        minLength:[5,"Name must be atleast 5 char"],
        maxLength:[50,"Name must be less than 50 char"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"User email is required"],
        lowercase:true,
        unique:[true,"Already registered email"]
    },
    password:{
        type:String,
        Select:false
    },
    forgetPasswordToken:{
        type:String
    },
    forgetPasswordExpiryDate:{
        type:String
    }
},{
    timestamps:true
})


const userModel=mongoose.model('Users',userSchema);

module.exports=userModel