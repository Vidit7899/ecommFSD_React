import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const client = axios.create({
    baseURL: "http://localhost:8080/shoppy" 
  });


function OrderDetails() {

    const [ordDetail, setOrdDetail]=useState({});
    const{ordId}=useParams()
    console.log(ordId);

    useEffect(()=>{

        async function getOrdDetail(){
            const response=await client.get(`/getOrderDetails/${ordId}`);
           setOrdDetail(response.data)
            
        }
 getOrdDetail();
    },[])
    
    console.log(ordDetail);
  return (
    <>
    
      <div>
        <p>{ordId}</p>
        {ordDetail.products&&ordDetail.products.map(item=>(
            <div key={item.prodId}>
            <p>{item.prodName}</p>
            <span>{item.prodDesc}</span>
            <span>{item.prodPrice} </span>

            <span>{item.orderProducts.prodQuantity}</span>
            </div>
        ))}
        <p>{ordDetail.order&&ordDetail.order.ordDate}</p>
        <p>{ordDetail.order&&ordDetail.order.ordTotal}</p>
      </div>
    </>
  )
}

export default OrderDetails