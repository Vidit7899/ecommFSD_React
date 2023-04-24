import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

const client = axios.create({
  baseURL: "http://localhost:8080/shoppy" 
});

function Home() {

  const [categories, setCategories]=useState([]);

  useEffect(()=>{
    async function getCategories() {
      const response = await client.get("/getAllCategories");
      setCategories(response.data);
    }
    getCategories();
  },[])

  const list=categories&&categories.map((category)=>{    
    return <button key={category.catId} ><Link to={{pathname:`products/${category.catId}`}} state={category.catName}>{category.catName}</Link></button>
  })

  return (
    <div className='Hello'>
    <button><Link to="/products" state="All Products">All Products</Link></button>
      {list}
    </div>
  )
}

export default Home
