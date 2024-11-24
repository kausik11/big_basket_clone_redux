import React,{useEffect, useState} from 'react'
import './AllCategoryList.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
import axios from 'axios';


const AllCategoryList = () => {
  const navigate = useNavigate();
    const [category,setCategory] = useState([]);
       
    const getAllCategoty = async()=>{
      const res = await axios.get('http://localhost:5000/category')
      setCategory(res.data[0].allcat);
    }
    
     useEffect(()=>{
      getAllCategoty();
     },[]);

      //  useEffect(()=>{
      //   console.log(category);
      //  },[category]);

  return (
    <>
    <h2>Category</h2>
    <hr/>
    <ButtonGroup vertical>
     {category.map((item)=><Button className='category-btn'>{item}</Button>)}
    </ButtonGroup>
    </>
  )
}

export default AllCategoryList
