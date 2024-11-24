import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AdminNavbar from './AdminNavbar';
import AllOrders from '../AllOrders/AllOrders';


const AdminHome = () => {
  return (
   <>
    <AdminNavbar/>
    <AllOrders/>

   </>
  )
}

export default AdminHome
