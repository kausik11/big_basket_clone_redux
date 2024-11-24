import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AdminNavbar.css';
import { useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Products List</Nav.Link>
          <Nav.Link href="#link">NewLister</Nav.Link>
          <Nav.Link href="#link">All Orders</Nav.Link>
          <Nav.Link href="#link">Add Product</Nav.Link>
          <Nav.Link onClick={()=>navigate('/')}>Back to Main website</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AdminNavbar
