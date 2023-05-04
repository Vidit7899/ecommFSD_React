import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import PlaceOrder from '../PlaceOrder';

const client = axios.create({
    baseURL: "http://localhost:8080/shoppy" 
  });

function Product() {

  const navigate=useNavigate();
  

  const[{basket, user}, dispatch]=useStateValue()

  const [quantity, setQuantity]=useState(1);
  const [clicked, setClicked]=useState(false)
    const {prodId}=useParams()
    const [product, setProduct]=useState({});

    function increase(){
      setQuantity(quantity+1)
    }

    function decrease(){
      if(quantity===1) return;

      else setQuantity(quantity-1);
    }

    useEffect(()=>{

      basket.forEach(element => {
        if(element.prodId===prodId) setClicked(true)
      });

        async function getProduct(){
            const response=await client.get(`/getProduct/${prodId}`)

            setProduct(response.data)
        }
        getProduct()
    },[])
const {prodName, prodDesc, prodPrice}=product

function addToBasket(){
  if(!JSON.parse(window.localStorage.getItem("user"))){
    navigate("/auth/signIn");
  }
  else{
 
  if(!clicked){
  dispatch({type:"addToBasket",payload:{
    prodId,prodName,prodDesc,prodPrice,quantity
  }})
  setClicked(!clicked)
}
  else{
    navigate("/Cart")
  }
}
}

async function sendPlaceOrder(){
  const response = await PlaceOrder([prodId],[quantity]);
  console.log(response);
  if(response.status===200){
    dispatch({type:"clearBasket"})
    navigate("/Successful",{
      state:{orderId:response.data.ordId}
    })
  }
}

  return (
    <div>
      <h1>
        {prodName}
      </h1>
      <img></img>
      <p>{prodDesc}</p>
      <b>{prodPrice}</b>
      <button onClick={increase}>+</button>
      <p>{quantity}</p>
      <button onClick={decrease}>-</button>
      <button onClick={addToBasket}>{!clicked?"Add to basket":"Go to basket"}</button>
      <button onClick={sendPlaceOrder}>Buy now</button>
    </div>
  )
}

export default Product
