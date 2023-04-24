import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config();
const {TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID}=process.env;
const client=twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN,{
    lazyLoading:true
});

export const sendOTP=async(req, res, next)=>{
    const {countryCode, phoneNumber}=req.body;

    try{
        const otpResponse=await client.verify.v2.services(TWILIO_SERVICE_SID).verifications.create({
            to:`${countryCode}${phoneNumber}`,
            channel:"sms"
        });
        
        res.status(200).send(`OTP Sent successfully:${JSON.stringify(otpResponse)}`)
    }
    catch(error){
        res.status(error?.status||400).send(error?.message||"something went wrong")
    }
    next();
}

export const verifyOTP=async(req, res, next)=>{
    const {countryCode, phoneNumber, otp}=req.body;

    try{
        const verifiedResponse=await client.verify.v2.services(TWILIO_SERVICE_SID).verificationChecks.create({
            to:`${countryCode}${phoneNumber}`,
            code:otp
        });
        if(verifiedResponse.valid===true)
        res.status(200).send(`OTP Verified :${JSON.stringify(verifiedResponse)}`)
        else{
            res.status(401).send('Invalid OTP')
        }
        
    }
    catch(error){
        res.status(error?.status||400).send(error?.message||"something went wrong")
    }
    next();
}

