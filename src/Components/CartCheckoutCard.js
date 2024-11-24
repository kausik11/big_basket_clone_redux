import React from 'react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../Redux/Cart/CartReducer';
import { useNavigate } from 'react-router-dom';

const CartCheckoutCard = ({subTotal}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEmptyCart = ()=>{
    dispatch(clearCart());
  }
  const handleContinueShopping = ()=>{
    navigate('/allproducts');
  }
  const handleCheckout = ()=>{
    navigate('/checkout');
  }
  return (
    <div>
      <button onClick={handleEmptyCart}>EMPTY BASKET</button>
      <div>
        <div>
            <div>
                <p>Subtotal</p>
                <p>{subTotal.toFixed(2)}</p>
            </div>
            <div>
                <p>Delivery Charge</p>
                <p>0.00</p>
            </div>
            <hr/>
            <div>
                <p>Total</p>
                <p>{subTotal.toFixed(2)}</p>
            </div>
            <button onClick={handleCheckout}>CHECKOUT</button>
        </div>
      </div>
      <button onClick={handleContinueShopping}>CONTINUE SHOPPING</button>
    </div>
  )
}

export default CartCheckoutCard
