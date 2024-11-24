import React from 'react'
import './CartListItem.css'
import { useState,useEffect } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity,removeProduct} from '../Redux/Cart/CartReducer';


const CartListItem = ({details}) => {
  const { id, productName, productprice, quantity ,StrikePrice} = details;

  const dispatch = useDispatch()
  // console.log("details",details);

  const {subTotal}= useSelector((state)=>state.cart)

  const handleIncreaseQuantity = (e)=>{
    dispatch(addQuantity({id,quantity:1}));
  }

  const handleDecreaseQuantity = (e)=>{
    if(quantity>1){
      dispatch(addQuantity({id,quantity:-1}));
    }else{
      dispatch(removeProduct({id}));
    }
  }

  const handleRemoveProduct = (e)=>{
    dispatch(removeProduct({id}));
  }

  return (
    <div>
    { 
      <div className='d-flex justify-content-between align-items-start my-2 cart-item container'>
        <div><p>{productName}</p></div>
        <div><p>{productprice.toFixed(2)}</p></div>
        <div className='d-flex justify-content-center align-items-center gap-2'>
            <button onClick={handleIncreaseQuantity}>+</button>
            <p>{quantity}</p>
            <button onClick={handleDecreaseQuantity}>-</button>
        </div>
        <div><p>{productprice.toFixed(2)*quantity}</p></div>
        <span onClick={handleRemoveProduct}><ClearIcon/></span>
        {/* savings */}
        <div><p>{(StrikePrice.toFixed(2)-productprice.toFixed(2)).toFixed(2)}</p></div>
      </div>
    }
    </div>
  )
}

export default CartListItem
