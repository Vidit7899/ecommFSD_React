import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Nav.css"



function Nav() {
  return (
    <div className='Nav'>

<div className="header__nav">

<img alt='logo'
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
            <span className="header__optionLineTwo">Orders</span>
          </div>

          <div className="header__optionBasket">
            <span>Cart</span>
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
      
    </div>
    <Outlet />
    </div>
  )
}

export default Nav
