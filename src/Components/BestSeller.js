import React from 'react'
import './BestSeller.css'
import { useState,useEffect } from 'react';
const BestSeller = ({bestseller = 'true',category = 'All'}) => {
  console.log(category);
  const [finaldata,setfinalData]=useState([]);

     const fetchData=async()=>{
      const response=await fetch('http://localhost:5000/products');
      const data=await response.json();
      setfinalData(data);
     }
     useEffect(()=>{
      fetchData();
      console.log(finaldata.slice(0,3));
     },[])
  return (
    <div className='best-seller-container'>
     {bestseller === 'true' && <h2>Best Sellers</h2>}
     {category !== 'All' && <h2>{category}</h2>}

     <div className='best-seller-items d-flex flex-wrap justify-content-center align-items-center gap-3'>
     {(bestseller === 'true' && category === 'All') ? (<>
      {finaldata.map((item)=>(
        item.bestseller === 'true' && (
        <div className='best-seller-item'>
          <img src={item.image} alt={item.productName}/>
          <h3>{item.productName}</h3>
          <p>Price: ${item.productprice}</p>
        </div>
          )))}
     </>): (<>
      {finaldata.filter((item)=>item.category === category).slice(0,3).map((item)=>(  
        <div className='best-seller-item'>
          <img src={item.image} alt={item.productName}/>
          <h3>{item.productName}</h3>
          <p>Price: ${item.productprice}</p>
        </div>
     ))}
     </>)}
     </div>

    </div>
  )
}

export default BestSeller
