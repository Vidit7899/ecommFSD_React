import axios from 'axios';
import React, { useState } from 'react'
import SignUp from './SignUp.jsx'



const client = axios.create({
  baseURL: "http://localhost:8080/shoppy/auth"
});

function OTP() {

  const [sent, setSent] = useState(false);
  const [verified, setVerified]=useState(false)



  const sendOTP = async (e) => {

    const response = await client.post(`/sendOTP`, { countryCode: e.target.countryCode.value, phoneNumber: e.target.phoneNumber.value })

    const res = (response.status)

    if (res === 200) setSent(true);

  }

  const verifyOTP = async (e) => {


    const response = await client.post(`/verifyOTP`, { countryCode: e.target.countryCode.value, phoneNumber: e.target.phoneNumber.value, otp: e.target.otp.value })

    const res = (response.status)

    if(res===200) setVerified(true)

  }


  return (
   
    <div>
     {verified ? <SignUp />:null}
     {!verified?<form onSubmit={(event) => {
        event.preventDefault();
        sent ? verifyOTP(event) : sendOTP(event)
      }}>
        <input type="text" name="countryCode" ></input>
        <input type="text" name="phoneNumber"></input>
        {sent ? <input type="text" name="otp"></input> : null}
        <button type='submit'>{sent ? 'Verify OTP' : 'Send OTP'}</button>
      </form>:null}

    </div>
  )
}




export default OTP
