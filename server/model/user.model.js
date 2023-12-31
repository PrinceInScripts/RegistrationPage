const mongoose=require('mongoose')
const JWT=require('jsonwebtoken')
const bcrypt=require('bcrypt')
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
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }

    this.password=await bcrypt.hash(this.password,10)
    return next()
})


userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id:this._id,email:this.password},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}


const userModel=mongoose.model('Users',userSchema);

module.exports=userModel