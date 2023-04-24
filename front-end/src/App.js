


import { createContext, useState } from "react";
import {Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import OTP from "./components/OTP";
import Product from './components/Product';
import Products from './components/Products';




function App() {
      const sentContext=createContext()
      const [sent, setSent]=useState(false)
     
 return(
  <div className='App'>
      
        <Nav />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products />} />
        <Route path='products/:catId' element={<Products />} />
        <Route path='product/:prodId' element={<Product />}/>
        <Route path='auth/OTP' element={<OTP />}/>
        </Routes>
      
  </div>
 )
}

export default App;
