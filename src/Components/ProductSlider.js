import React from 'react'
import './ProductSlider.css';
import { useState,useEffect } from 'react';

const ProductSlider = () => {
    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchItems = async () => {
        const response = await fetch('http://localhost:5000/Items');
        const data = await response.json();
        setItems(data);
        setLoading(false);
        // console.log(data);
    }
    useEffect(() => {
        fetchItems();
    },[]);
  return (
    <div className='product-slider'>
      {loading ? <h1>Loading...</h1> : <>
        {items.map((item) => (
          <div className='product-card' key={item.id}>
          
          <div className='product-image'><img src={item.image} alt={item.productName} /></div>
          <span className='off-tag'>{item.OFF}% OFF</span>
            <h2>{item.Brand.slice(0,5)}</h2>
            <h3>Product Name: {item.productName.slice(0,5)}...</h3>
            <h4>Price: $ {item.productprice}</h4>
            <h5 style={{color: 'red',textDecoration: 'line-through'}}>$ {item.StrikePrice}</h5>
            <h5>Qty: {item.QtyPiece}</h5>
            <p>Date: {item.Date}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </>}
    </div>
  )
}

export default ProductSlider
