import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const client = axios.create({
    baseURL: "http://localhost:8080/shoppy" 
  });

function Product() {

    const {prodId}=useParams()
    const [product, setProduct]=useState({});

    useEffect(()=>{
        async function getProduct(){
            const response=await client.get(`/getProduct/${prodId}`)

            setProduct(response.data)
        }
        getProduct()
    },[])
const {prodName, prodDesc, prodPrice}=product
  return (
    <div>
      <h1>
        {prodName}
      </h1>
      <img alt='image'></img>
      <p>{prodDesc}</p>
      <b>{prodPrice}</b>
    </div>
  )
}

export default Product
