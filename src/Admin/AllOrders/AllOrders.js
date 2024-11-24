import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [getproductName, setgetProductName] = useState([]);
    const [userDetails, setUserDetails] = useState([]);


    const fetchOrders = async () => {
        const response = await axios.get('http://localhost:5000/orders');
        setOrders(response.data);
    }

    // const [{
    //       id: orderId,
    //       userId,
    //       items: [
    //         {
    //           id: itemId,
    //           quantity,
    //           OFF,
    //           Date: deliveryDate,
    //           QtyPiece,
    //           QtyPieceForOneElement,
    //           productName,
    //           productprice,
    //           StrikePrice,
    //           Brand,
    //           category,
    //           bestseller,
    //           image,
    //           userId: itemUserId,
    //         },
    //       ],
    //       totalAmount,
    //       paymentMethod,
    //       orderDate,
    //       address: { phone, name, address, landmark, pincode, city, state },
    //     },
    //   ] = orders;


    // const getProductName = async(id)=>{
    //     const response = await axios.get(`http://localhost:5000/products/${id}`);
    //     setProductName(response.data.productName);
    // }
    // const getUserDetails = async(id)=>{
    //     const response = await axios.get(`http://localhost:5000/users/${id}`);
    //     setUserDetails(response.data);
    // }
    useEffect(() => {
        fetchOrders();
        // getProductName();
        // getUserDetails();
    }, []);
    return (
        <div>
            <h1 className='text-center mt-5'>All Orders</h1>
            <div className='container'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User Details</th>
                            <th>Product Name</th>
                            <th>Order Price</th>
                            <th>Payment Method</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    {orders.map((order) => (
                        <tbody>
                            <tr>
                                <td>{order.id}</td>
                                <td>
                                    
                                    <strong>UserId:</strong> {order.userId}<br />
                                    <strong>Name:</strong> {order.address.name}<br />
                                    <strong>Phone:</strong> {order.address.phone}<br />
                                    <strong>Email:</strong> {order.address.email}<br />
                                    <strong>Address:</strong> {order.address.address}, {order.address.city}, {order.address.state} - {order.address.pincode}
                                    
                                </td>
                                <td>
                                    {order.items.map((item) => (
                                        <div key={item.id} className="mb-2">
                                            <strong>Product:</strong> {item.productName}<br />
                                            <strong>Brand:</strong> {item.Brand}<br />
                                            <strong>Quantity:</strong> {item.quantity}<br />
                                            <strong>Price:</strong> ₹{item.productprice} x {item.quantity}
                                        </div>
                                    ))}
                                </td>

                                <td>₹{order.totalAmount.toFixed(2)}</td>
                                <td>{order.paymentMethod.toUpperCase()}</td>
                                <td>{new Date(order.orderDate).toLocaleString()}</td>

                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default AllOrders
