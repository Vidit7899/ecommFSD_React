import dotenv from "dotenv"
dotenv.config();
import  Jwt  from "jsonwebtoken";
import localStorage from "localStorage"
import db from "../models/index.js";
const User=db.user;


const verifyToken=(req, res, next)=>{

const token=localStorage.getItem("token");

if(!token){
    return res.status(401).send("Unauthorised")
}

else{
    Jwt.verify(token, process.env.SECRET_KEY, async function(error, decoded){
        if(error){
            return res.status(401).send("Unauthorised")
        }
       
        const userId=decoded.id;
        
        const user=await User.findByPk(userId);

        req.user=user
        
        next()
    })
}

}

export default verifyToken