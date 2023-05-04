import axios from 'axios'
import React, { useEffect, useState } from 'react'


const client=axios.create({
    baseURL:"http://localhost:8080/shoppy"
})
function Dashboard() {

    const [orders, setOrders]=useState(null)

    useEffect(()=>{
        async function getOrders(){
            const response=await client.get("/getOrders");

            setOrders(response.data)
        }
        getOrders();
    },[])
console.log();
  return (
    <>
    {orders&&orders.map( item=>(
        <div key={item.ordId}>
            <p>{item.ordId}</p>
            <p>{item.ordDate}</p>
            <p>{item.ordTotal}</p>
        </div>
    ))}
    </>
  )
}

export default Dashboard