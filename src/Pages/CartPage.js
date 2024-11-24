import React, { useEffect, useState } from 'react'
import NavbarComp from '../Components/NavbarComp'
import './CartPage.css'
import CartListItem from '../Components/CartListItem'
import CartCheckoutCard from '../Components/CartCheckoutCard'
import { useDispatch,useSelector } from 'react-redux';
import { addProduct,removeProduct, clearCart} from '../Redux/Cart/CartReducer'



const CartPage = () => {
  const [cartData,setCartData] = useState([])

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const subTotal = useSelector(state => state.cart.subTotal)
  
  useEffect(()=>{
    setCartData(cart)
  })  

  useEffect(()=>{
    console.log(cartData)
  })
 
  return (
    <>
    <NavbarComp/>
    <div className='container my-5'>
      <h1 className='text-start text-2xl font-bold'>Your Basket ({cartData.length}Items)</h1>
      <hr/>
      <div className='d-flex justify-content-between align-items-center my-2 cart-heading'>
        <div>Item Description</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div>Savings</div>
      </div>
 </div>
 {cartData.map((ele)=>(
  <CartListItem details={ele}/>
 ))}

 <CartCheckoutCard subTotal={subTotal}/>
    </>
  )
} 

export default CartPage
