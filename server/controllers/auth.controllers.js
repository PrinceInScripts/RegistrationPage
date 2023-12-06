const userModel = require("../model/user.model");
const emailValidator=require('email-validator')


const signup=async (req,res)=>{
    const {name,email,password,confirmPassword}=req.body
    console.log(name,email,password,confirmPassword);

    try {
     if(!name || !email || !password || !confirmPassword)
     {
      return res.status(400).json({
        success:false,
        data:"Every filed is required"
      })
     }

     let validEmail=emailValidator.validate(email);
      
     if(!validEmail){
      return res.status(400).json({
        success:false,
        data:"Please provide valid email"
      })
     }

     if(password !== confirmPassword){
      return res.status(400).json({
        success:false,
        message:"Password and confirmPassword are not matched"
      })
     }


       const userInfo=userModel(req.body)
       const result= await userInfo.save()
       return res.status(200).json({
        success:true,
        data:result
      })
    } catch (error) {
      return res.status(400).json({
        success:false,
        data:error.message
      })
    }
  
}


const signin=async (req,res)=>{

  const {email,password}=req.body

  if(!email || !password){
    return res.status(400).json({
      success:false,
      data:"Every fileds is required"
    })
  }

  try {
     const user=await userModel
                .findOne({email})
                .select("+password")

     if(!user || password !==user.password){
       return res.status(400).json({
        success:false,
        message:"Invalid credentials"
       })

     }

     const token =user.jwtToken()
     user.password=undefined;

     const cookieOptions={
      maxAge:24*60*60*100,
      httpOnly:true
     }

    res.cookie("token",token,cookieOptions)

     res.status(200).json({
      success:true,
      data:user
    })

  } catch (error) {
    return res.status(400).json({
      success:false,
      data:error.message
    })
  }
}



module.exports={
    signup,
    signin
}