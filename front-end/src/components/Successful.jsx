import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Successful() {
    const location=useLocation()
    console.log(location.state.orderId);
  return (
    <>
        <h1>
            Order Placed Successfully!!
        </h1>
        <Link to={`/OrderDetails/${location.state.orderId}`}>View Details</Link>
    </>
  )
}

export default Successful