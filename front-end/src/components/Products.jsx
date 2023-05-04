import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import sample from "../assets/sample.jpeg"

const client = axios.create({
    baseURL: "http://localhost:8080/shoppy" 
  });

function Products() {
    const {catId}=useParams()
    const location=useLocation()

    const [products, setProducts]=useState(null);

  useEffect(()=>{
    async function getProducts() {
        let response=null
      if(!catId){
        response = await client.get("/getAllProducts");
      }
      else{
        response = await client.get(`/getAllProducts/${catId}`);
      }
      setProducts(response.data);
    }
    getProducts();
  },[catId])

  const list=products&&products.map((product)=>{
    return(
        
        <div key={product.prodId}>
            <h5><Link to={{pathname:`/product/${product.prodId}`}}>{product.prodName}</Link></h5>
            <img alt='image' src={sample}></img>
            <p>{product.prodDesc}</p>
            <p>{product.prodPrice}</p>
        </div>
    )
    
  })


  return (
    <div>
    <h1>
    {location.state}
    </h1>
      {list}
    </div>
  )
}

export default Products
