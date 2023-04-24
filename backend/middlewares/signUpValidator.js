import db from "../models/index.js";
const User = db.user;

 const checkDuplicateEmailOrPhone = async (req, res, next)=>{
    

    const {email, phNo}=req.body;

    const user1=await User.findOne({where:{
        email:email
    }})

    if(user1){
       return res.status(400).send("User with given email already exists")
    }
    const user2 = await User.findOne({
        where:{
            phNo:phNo
        }
    })

    if(user2){
        return res.status(400).send("User with given Phone Number already exists")
    }

    next();
}

export default checkDuplicateEmailOrPhone;