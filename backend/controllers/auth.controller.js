import bcrypt from "bcrypt"
import db from "../models/index.js";
const User=db.user

import Jwt  from "jsonwebtoken";
import localStorage from "localStorage";

export const signUp=async (req, res)=>{

    const {name, email, phNo, password}=req.body;
    
    try{
   const user= await User.create({
        name,email,phNo,password:bcrypt.hashSync(password,8)
      
    })
    const token=Jwt.sign({id:user.userId}, process.env.SECRET_KEY,{expiresIn:86400})
    localStorage.setItem("token", token)
    res.status(200).send({user, token})
}catch(error){
    console.log(error)
    res.status(500).send(error)
}
}

export const signIn=async (req, res)=>{

    const {email, password}=req.body

    try{
        var user = await User.findOne({where:{email:email} })
     }
     
     catch(err){
            return res.status(500).send({message:err.message||"Something went wrong"})
         }

         if(!user) return res.status(401).send({message:"User not found"})

         var isPasswordValidate=bcrypt.compareSync(password, user.password);

        if(!isPasswordValidate){
           return res.status(401).send({message:'Invalid Password, please try again or reset Password'})
        }
           
       
        const token=Jwt.sign({id:user.userId}, process.env.SECRET_KEY,{expiresIn:86400})

            localStorage.setItem("token", token)
            res.status(200).send({user, token})

}

export const signOut = (req, res)=>{
    localStorage.removeItem("token");
    res.status(200).send({message:"Successfully signed out"})
}

export const resetPassword = async (req, res)=>{
    const {phNo, newPassword}=req.body;
    
   try{
    const user=await User.findOne({
        where:{
            phNo
        }
       })

       if(!user){
        return res.status(401).send({message:"User with given mobile number not found"})
       }

       await User.update({
        password:bcrypt.hashSync(newPassword,8)
       },{
        where:{
            userId:user.userId
        }
       })
       return res.status(200).send({message:"Password reset successful"})
   }
   catch(error){
    return res.status(500).send(error.message)
   }

}