import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavbarComp from '../Components/NavbarComp';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import PaymentComp from '../Components/PaymentComp';
import ProtectedRoute from './ProtectedRoute';
import LoginSignup from '../Components/LoginSignup';
import { useState } from 'react';
import AdminHome from '../Admin/AdminHome/AdminHome';
import AdminLogin from '../Admin/AdminLogin/AdminLogin';
const RoutersComp = () => {
  const [logSignup,setLoginSignup]=useState(true);
  return (
    <div>
      <Router>
        <Routes>
       {/* <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginSignup setLoginSignup={setLoginSignup}/>}/>
            <Route path='/allproducts' element={<Product/>}/>
            <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
            <Route path='/checkout' element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>}/>
            <Route path='/payment' element={<ProtectedRoute><PaymentComp/></ProtectedRoute>}/>
            {/* if page not found */}
            <Route path='*' element={<><NavbarComp/><h1 className='text-center mt-5'>Page Not Found</h1></>}/>



            //admin platform
            <Route path='/adminhome' element={<AdminHome/>}/>
            <Route path='/adminlogin' element={<AdminLogin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default RoutersComp
