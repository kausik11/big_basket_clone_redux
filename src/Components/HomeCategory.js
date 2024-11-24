import React, { useState, useEffect } from 'react'
import './HomeCategory.css'
import { Container } from 'react-bootstrap'
import {Conatiner,Card,Row,Col,Dropdown} from 'react-bootstrap'
import LocalOffer from '@mui/icons-material/LocalOffer'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';

const HomeCategory = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const fetchCategory = async()=>{
    const res = await fetch('http://localhost:5000/category')
    const data = await res.json();
    setCategory(data);
  }
  useEffect(()=>{
    fetchCategory();
  },[]) 
 
  useEffect(()=>{
    console.log(category);
  },[category])
  return (
        <div className="row category-row">
            <Dropdown className='col-md-4'>
              <Dropdown.Toggle className='col-2 d-flex justify-content-center align-items-center' id="dropdown-basic" style={{width: '100%',backgroundColor: '#5e9400',border: 'none',}}>
                SHOP BY CATEGORY
              </Dropdown.Toggle>
              <Dropdown.Menu>

                {category[0]?.allcat?.map((item,index)=>(
                  <Dropdown.Item  key={index} href="#" className='text-center dropdown-item'>{item}</Dropdown.Item>
                ))}
              </Dropdown.Menu>  
            </Dropdown>
            <ul className='col-md-8 category-list'>
              <li onClick={()=>navigate('/allproducts')}>All Category</li>
              <li>Most Popular</li>
              <li>New Arrivals</li>
              <li onClick={()=>navigate('/adminlogin')}>AdminLogin</li>
            </ul>
            <div className='col-md-3 d-flex flex-row gap-2 justify-content-center align-items-center'>
              <button className='btn btn-primary' style={{width: '100%',backgroundColor: '#5e9400',border: 'none'}}>Offers<LocalOffer/></button>
              <button className='btn btn-success' style={{width: '100%',backgroundColor: '#5e9400',border: 'none', flexGrow:"1"}}>Wallet<AccountBalanceWalletIcon/></button>
            </div>
        </div>
  )
}

export default HomeCategory
