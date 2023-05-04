import React from 'react'
import { useStateValue } from '../StateProvider'
import CartItem from './CartItem'
import PlaceOrder from '../PlaceOrder';
import { getBasketTotal, getProdIds, getProdQuantities } from '../reducers/UserReducer';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const[{basket}, dispatch]=useStateValue();
    const navigate=useNavigate()

    async function sendPlaceOrder(){
      const response = await PlaceOrder(getProdIds(basket),getProdQuantities(basket));
      console.log(response);
      if(response.status===200){
        dispatch({type:"clearBasket"})
        navigate("/Successful",{
          state:{orderId:response.data.ordId}
        })
      }
    }
 

  if(basket.length===0) return(
    <>
      <h2>
        Cart is empty
      </h2>
    </>
  )
  else
  return (
    <>
    {basket.map(item => (
        
        <CartItem key={item.prodId}
          prodId={item.prodId}
          prodName={item.prodName}
          prodPrice={item.prodPrice}
          quantity={item.quantity}
        />
       
    ))}
      <p>{getBasketTotal(basket)}</p>
      <button onClick={sendPlaceOrder}>CheckOut</button>
      </>
  )
  
}

export default Cart