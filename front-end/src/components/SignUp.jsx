import axios from 'axios';

import { useLocation, useNavigate } from 'react-router-dom'

import { useStateValue } from '../StateProvider';


const client = axios.create({
  baseURL: "http://localhost:8080/shoppy/auth"
});

function SignUp() {

const [{user}, dispatch]=useStateValue()

  const location =useLocation();
  const navigate=useNavigate();

  function checkPasswordMatch(p1,p2){
    return (p1===p2)
  }

 async function sendSignUp(e){
    try{const response = await client.post(`/signUp`, { name: e.target.name.value,email:e.target.email.value, phNo: e.target.phNo.value, password:e.target.password.value})
    if(response.status===200) {
      console.log(response.data);
      window.localStorage.setItem("user", JSON.stringify(response.data.user.name))
      if(response.data.token){
        window.localStorage.setItem("token",JSON.stringify(response.data.token))
      }
      console.log(JSON.parse(window.localStorage.getItem("user")));
        dispatch({type:"signIn", payload:response.data.user.name})
      navigate("/")
    }
 }catch(error){alert(error.response.data)}
  }
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      const ans=checkPasswordMatch(e.target.password.value, e.target.ConfirmPassword.value);
      if(ans){
        sendSignUp(e)
      }
      else alert("password not matching")
    }}>
      <input type="number" name="phNo" value={location.state} disabled></input>
      <input type="text" name="name" required></input>
      <input type="email" name="email"required></input>
      <input type="password" name="password" required pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*_=+-]).{8,16}'></input>
      <input type="text" name="ConfirmPassword" required></input>
      <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default SignUp