import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const client = axios.create({
  baseURL: "http://localhost:8080/shoppy/auth"
});

function SignIn() {

  const navigate=useNavigate();
  const [{user}, dispatch]=useStateValue()
  async function sendSignIn(e){

    try{const response = await client.post(`/signIn`, { email:e.target.email.value,password:e.target.password.value})
    if(response.data.token) {
      window.localStorage.setItem("token",JSON.stringify(response.data.token));
      window.localStorage.setItem("user",JSON.stringify(response.data.user.name));
      dispatch({type:"signIn", payload:response.data.user.name})
      navigate("/")
    }
  }catch(error){
    alert(error.response.data)
  }
}

  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      sendSignIn(e)
    }}>
      
      <input type="email" name="email" required></input>
      <input type="password" name="password" required></input>
      <button type='submit'>submit</button>
    </form>
    <p>Don't have account? <Link to={"/auth/OTP"}>Sign up</Link></p>
    </>
  )
}

export default SignIn