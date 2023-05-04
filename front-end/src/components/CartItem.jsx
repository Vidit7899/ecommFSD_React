import React from 'react'
import { useStateValue } from '../StateProvider'

function CartItem({  prodId,prodName,prodPrice,quantity}) {

  const [{basket}, dispatch]=useStateValue()

  function removeFromBasket(){
    dispatch({type:"removeFromBasket", payload:{prodId}})
  }
  return (
    <div className='checkoutProduct'>
 {/* <img className='checkoutProduct__image' src={image} /> */}

    <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{prodName}</p>
        <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{prodPrice}</strong>
        </p>
        <p>{quantity}</p>
        
        
            <button onClick={removeFromBasket}>Remove from Basket</button>
    
    </div>
</div>
  )
}

export default CartItem