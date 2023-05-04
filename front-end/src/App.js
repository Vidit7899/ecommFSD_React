
import {Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import OTP from "./components/OTP";
import Product from './components/Product';
import Products from './components/Products';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn"
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import OrderDetails from "./components/OrderDetails";
import Successful from "./components/Successful";




function App() {
 
 return(
  <div className='App'>
      
        <Nav />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products />} />
        <Route path='products/:catId' element={<Products />} />
        <Route path='product/:prodId' element={<Product />}/>
        <Route path='auth/OTP' element={<OTP />}/>
        <Route path ='auth/signUp' element={<SignUp />}/>
        <Route path ='auth/signIn' element={<SignIn />}/>
        <Route path="Cart" element={<Cart />}/>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="OrderDetails/:ordId" element={<OrderDetails/>} />
        <Route path="Successful" element={<Successful />} />
        </Routes>
      
  </div>
 )
}

export default App;
