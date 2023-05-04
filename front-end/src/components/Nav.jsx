import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "./Nav.css"
import { useStateValue } from '../StateProvider';
import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:8080/shoppy/auth" 
});

function Nav() {

  const[{user, basket}, dispatch]=useStateValue();
  const navigate=useNavigate()
  
const [data,setData]=useState(null);
useEffect(()=>{
  setData(JSON.parse(window.localStorage.getItem("user")))
},[user])
console.log(data);

async function signOut(){

await client.post("/signOut");

dispatch({type:"signOut"});

window.localStorage.removeItem("user");

setData(null)


navigate("/")

}
  return (
    <div className='Nav'>

<div className="header__nav">

<img alt='logo'
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        
        <div className="header__option">
          <span className="header__optionLineOne">Hello {!data?"Guest":data}</span>
          <span className="header__optionLineTwo">{!data?<Link to={"/auth/signIn"}>Sign In</Link>:<button onClick={signOut}>Sign Out</button>}</span>
        </div>

        <div className="header__option">
            <span className="header__optionLineTwo">Orders</span>
          </div>

          <div className="header__optionBasket">
            <span><Link to={"/Cart"} className="header__optionLineTwo header__basketCount">Cart</Link></span>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
      
    </div>
    <Outlet />
    </div>
  )
}

export default Nav
