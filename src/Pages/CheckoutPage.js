import React, { useState,useEffect} from 'react'
import './CheckoutPage.css'
import NavbarComp from '../Components/NavbarComp'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';


const CheckoutPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState([]);
  const [isAddress, setIsAddress] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);

  const {cart} = useSelector((state)=>state.cart);
  console.log("cart is",cart);




  const [formData, setFormData] = useState({
    phone:'',
    name:'',
    address:'',
    landmark:'',
    pincode:'',
    city:'',
    state:'',
  })

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setAddress(formData);
    setIsEditAddress(false);
    setIsAddress(true);
   

    // setFormData({
    //   phone:'',
    //   name:'',
    //   address:'',
    //   landmark:'',
    //   pincode:'',
    //   city:'',
    //   state:'',
    // })
  }

  return (
    <>
     <NavbarComp />
      <div className="checkout-container d-flex justify-content-between">
        {/* Address Section */}
        <div className="address-container">
          <h1>Delivery Address</h1>
          {address ? (
            <div className="address-details">
              <p><strong>Phone:</strong> {address.phone }</p>
              <p><strong>Name:</strong> {address.name }</p>
              <p><strong>Address:</strong> {address.address}</p>
              <p><strong>Landmark:</strong> {address.landmark}</p>
              <p><strong>City:</strong> {address.city}</p>
              <p><strong>State:</strong> {address.state}</p>
              <p><strong>ZIP:</strong> {address.pincode}</p>
              <button onClick={() => setIsEditAddress(true)}>Edit Address</button>
            </div>
          ) : (
            <p>No address found. Please add an address.</p>
          )}

          {isEditAddress && (
            <form onSubmit={handleSubmit} className="address-form">
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="landmark"
                placeholder="Landmark"
                value={formData.landmark}
                onChange={handleChange}
                required
              />
              <button type="submit">Save Address</button>
              <button type="button" onClick={() => setIsEditAddress(false)}>
                Cancel
              </button>
            </form>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="order-summary-container">
          <h1>Order Summary</h1>
         <p>Total Items: {cart.length}</p>
         <p>Subtotal: {cart.reduce((acc,item)=>acc+item.productprice*item.quantity,0)}</p>
         <p>Total Amount Payable: {cart.reduce((acc,item)=>acc+item.productprice*item.quantity,0)}</p>
         <button disabled={!isAddress} onClick={()=>navigate('/payment',{state:{address:formData}})}>Place Order</button>
          {/* Add order summary details here */}
        </div>
      </div>
    </>
  )
}

export default CheckoutPage
