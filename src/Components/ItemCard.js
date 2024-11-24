import React from 'react'
import './ItemCard.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct,addQuantity } from '../Redux/Cart/CartReducer';
import { useSelector } from 'react-redux';

const ItemCard = ({item}) => {
  const dispatch = useDispatch();
  const userId = localStorage?.getItem('userId');
  const navigate = useNavigate();

  const handleCartData = (product)=>{
    dispatch(addProduct({...product,userId}));
    dispatch(addQuantity({id:product.id,quantity:1}))
  }
  
  //share to whatsapp with product details
  const handleShare = ()=>{
    const url = `https://wa.me/?text=${item.productName} - ${item.productprice} - ${item.Brand} - ${item.QtyPiece}- ${item.image}`;

    window.open(url,'_blank');
  }
  return (
    <Card style={{width: '18rem'}} className='shadow-lg m-2 rounded item-card'>
      <Card.Img variant='top' src={item.image} alt={item.productName} style={{height:'200px',objectFit:'contain'}}/>
      <ListGroup variant='flush'>
      <Card.Body>
        <Card.Title>{item.productName}</Card.Title>
        </Card.Body>
      <ListGroup.Item>Brand : {item.Brand}</ListGroup.Item>
      <ListGroup.Item>${item.QtyPiece}</ListGroup.Item>
        <ListGroup.Item>Price : ${item.productprice}</ListGroup.Item>
        <ListGroup.Item style={{'textDecoration':'line-through'}}>${item.StrikePrice}</ListGroup.Item>
        <Card.Body className='d-flex justify-content-between align-items-center'>
        <Button variant='success' onClick={(e)=>{e.preventDefault(); handleCartData(item); navigate('/cart')}}>Add Cart</Button>
        <Button variant='success' onClick={handleShare}>Share</Button>
      </Card.Body>
      </ListGroup>
    </Card>
  )
}

export default ItemCard
