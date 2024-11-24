import { Label } from '@mui/icons-material';
import React, { useState } from 'react'
import NavbarComp from './NavbarComp';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';

const PaymentComp = () => {

  const location = useLocation();
  const address = location.state.address;

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const {cart,subTotal} = useSelector((state)=>state.cart);
    const navigate = useNavigate();
    const userId = localStorage?.getItem('userId');

    const handlePlaceOrder = async()=>{
      if (cart.length === 0) {
        alert('Cart is empty');
        return;
      }
      const orderData = {
        userId:userId,
        items:cart,
        totalAmount:subTotal,
        paymentMethod:paymentMethod,
        orderDate:new Date().toISOString(),
        address:address,
      }
      try {
        const res = await axios.post(`http://localhost:5000/orders`,orderData);
        if (res.status === 200) {
          alert('Order placed successfully');
          navigate('/');
        }
      } catch (error) {
        console.log(error);
        alert('Something went wrong');
      }
    }


  return (
    <>
    <NavbarComp/>
    <div className='payment-container'>
      <h1>Payment</h1>
      <div className='payment-options'>
        <button onClick={()=>setPaymentMethod('wallet')}>Wallet</button>
        <button onClick={()=>setPaymentMethod('card')}>Card</button>
        <button onClick={()=>setPaymentMethod('netbanking')}>Net Banking</button>
        <button onClick={()=>setPaymentMethod('upi')}>UPI</button>
        <button onClick={()=>setPaymentMethod('cod')}>COD</button>
      </div>
      <div>
        <h1>Total Amount Payable: {cart.reduce((acc,item)=>acc+item.productprice*item.quantity,0)}</h1>
      </div>
      <div className='payment-method-container'>
        <h1>Payment Method {paymentMethod}</h1>
        {paymentMethod === 'card' ? <div>
             <label htmlFor='cardNumber'>Card Number</label>
            <input type='text' id='cardNumber' placeholder='Card Number'/>
            <br/>   
            <label htmlFor='cardHolderName'>Card Holder Name</label>
            <input type='text' id='cardHolderName' placeholder='Card Holder Name'/>
            <br/>
            <label htmlFor='expiryDate'>Expiry Date</label>
            <input type='text' id='expiryDate' placeholder='Expiry Date'/>
            <br/>
            <label htmlFor='cvv'>CVV</label>
            <input type='number' id='cvv' placeholder='CVV'/>
            <button onClick={handlePlaceOrder}>Place Order</button> 
        </div> : <button onClick={handlePlaceOrder}>Place Order</button>}        
      </div>
    </div>
    </>
  )
}

export default PaymentComp
