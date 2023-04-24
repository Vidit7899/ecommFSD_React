import {sendOTP,verifyOTP} from "../middlewares/OTPservice.js"
import checkDuplicateEmailOrPhone from "../middlewares/signUpValidator.js";
import { resetPassword, signIn, signOut, signUp } from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/authJWT.js";


const authRoutes=(app)=>{
app.post("/shoppy/auth/sendOTP",sendOTP);
app.post("/shoppy/auth/verifyOTP", verifyOTP)

app.post("/shoppy/auth/signUp", checkDuplicateEmailOrPhone, signUp);
app.post("/shoppy/auth/signIn", signIn)
app.put("/shoppy/auth/resetPassword", resetPassword)
app.post("/shoppy/auth/signOut", verifyToken, signOut)
}
export default authRoutes