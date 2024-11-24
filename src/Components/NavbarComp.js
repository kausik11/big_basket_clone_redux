import React from 'react'
import { useState,useEffect } from 'react'
import { Button,Container,Form,Nav,Navbar,NavDropdown,Col,Image,Row,Offcanvas} from 'react-bootstrap'
import logo from '../assests/logo.png'
import AccountBox from '@mui/icons-material/AccountBox'
import './NavbarComp.css'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Card from 'react-bootstrap/Card'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginSignup from './LoginSignup';
import ClearIcon from '@mui/icons-material/Clear';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Auth/AuthReducer'
import { useDispatch } from 'react-redux';


const NavbarComp = () => {
  const [isSticky,setIsSticky]=useState(false);
  const [show,setShow]=useState(false);
  const [logSignup,setLoginSignup]=useState(false);
  const [afterLogin,setAfterLogin]=useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Accessing state from Redux store
  const {isLoggedIn,username}=useSelector(state=>state.auth);

  //cart data
  const {cart}=useSelector(state=>state.cart);
  console.log("home cart icon",cart);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>90){
        setIsSticky(true);
      }else{
        setIsSticky(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener('scroll',handleScroll);
  },[])

  const handleLogout = ()=>{
    dispatch(logout());
    navigate('/');
  }

  return (
    <>
    <Card className='card-style'>
    <Card.Body>
        <ul>
            <li className='telephone'>
                <i><PhoneIcon style={{fontSize: '20px', color: 'white'}}/></i>
                <span style={{color: 'white'}}>033-5481575478</span>
            </li>
            <li className='location'>
                <i><LocationOnIcon style={{fontSize: '20px', color: 'white'}}/></i>
                <span style={{color: 'white'}}>700037,kolkata <KeyboardArrowDownIcon style={{fontSize: '20px', color: 'white'}}/></span>

            </li>
        </ul>
    </Card.Body>
    </Card>
    <Navbar expand="lg" className={`bg-body-tertiary ${isSticky ? 'sticky-navbar animated ' : ''}`} bg="primary" style={{height:"10vh",boxShadow:"0px 21px 5px 0px rgba(0,0,0,0.55)"}}>
      <Container fluid>
        <Navbar.Brand href="#" className='me-3'>
          <Col onClick={()=>navigate('/')} style={{cursor:"pointer"}}>
            <Image src={logo} roundedCircle alt='logo' height="80" px={2}></Image>
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
     
          <div className='mx-auto d-flex align-items-center w-50'>
          <Form className="d-flex w-100">
            <Form.Control
              type="search"
              placeholder="Search for a product"
              className="me-2 flex-grow-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </div>

         { !isLoggedIn ? (<Row>
        <Col>
          <Button variant='success mx-3 my-2 d-flex gap-2 shadow-sm' onClick={()=>setLoginSignup((prev)=>!prev)}>Login/SignUp<AccountBox/></Button>
        </Col>
      </Row>) : (<div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>Hello {username || 'User'}!<Button variant='outline-success' onClick={handleLogout}>Logout</Button></div>)
         }
      <Row className='mx-auto py-2 me-4'>
        <Col className='d-flex justify-content-center align-items-center gap-2' style={{cursor:"pointer"}} onClick={handleShow}>

        <ShoppingCart style={{fontSize: '34px', color: '#28a745'}} className='cart-icon' />

        <div className='cart-count-div'>
        <p className=' fw-bold cart-count'>{cart.length}</p>
        </div>
        </Col>
      </Row>
     
      
      <Offcanvas show={show} onHide={handleClose} style={{height:"100vh",width:"80vw"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column gap-2' >
        {cart.map((item)=>(
          <>
          <div className='d-flex justify-content-between align-items-center'>
            <img src={item.image} alt='prod img' style={{width:"60px",height:"60px"}}></img>
            <div className='d-flex flex-column gap-2'>
            <h3></h3>{item.productName}<h3/>
            <p>{item.quantity}x{item.productprice}</p>
            </div>
            <div className='d-flex gap-2 align-items-baseline justify-content-center'>
              <button>+</button>
              <p>{item.quantity}</p>
              <button>-</button>
            </div>
            <div className='d-flex gap-4'>
              <p>Total: {item.productprice*item.quantity}</p>
              <p>saved Rs: {((item.StrikePrice*item.quantity)-(item.productprice*item.quantity)).toFixed(2)}</p>
              <span><ClearIcon/></span>
            </div>
          </div>
          <div>
            <p>Delivery Charge **</p>
            <p>**Actual Delivery Charge will be calculated at checkout**</p>
            <hr/>
          </div>
          </>
        ))}
        <p>Subtotal {cart.reduce((acc,item)=>acc+item.productprice*item.quantity,0)}</p>
        <button className='btn btn-success' onClick={()=>navigate('/checkout')}>CHECKOUT</button>
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {logSignup && <LoginSignup setLoginSignup={setLoginSignup}/>}
    </>
  )
}

export default NavbarComp
