import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, checkEmail } from '../Redux/NewLister/NewLister';
const Footer = () => {
    const [useremail,setuserEmail] = useState('');

    //acess redux state
    const {email,error,message} = useSelector(state => state.newLister);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
         //check if email is already in the list
         dispatch(checkEmail(useremail)).then((res) => {
            if(res.payload.some(item => item.email === useremail)){
                alert("Email already exists");
            }else{
                dispatch(setEmail(useremail));
            }
        });
       
        setuserEmail('');
        if(error){
            alert(error);
        }
        if(message){
            alert(message);
        }
    }
  return (
      <div className='footer-container'>
        <div className='footer-content'>
          <h2>Online Grocer shop</h2>
          <hr></hr>
          <div className="description">
          <p>
            Did you ever imagine that the freshest of fruits and vegetables, top
            quality pulses and food grains, dairy products and hundreds of
            branded items could be handpicked and delivered to your home, all at
            the click of a button? India’s first comprehensive online megastore,
            bigbasket.com, brings a whopping 20000+ products with more than 1000
            brands, to over 4 million happy customers. From household cleaning
            products to beauty and makeup, bigbasket has everything you need for
            your daily needs. bigbasket.com is convenience personified We’ve
            taken away all the stress associated with shopping for daily
            essentials, and you can now order all your household products and
            even buy groceries online without travelling long distances or
            standing in serpentine queues. Add to this the convenience of
            finding all your requirements at one single source, along with great
            savings, and you will realize that bigbasket- India’s largest online
            supermarket, has revolutionized the way India shops for groceries.
            Online grocery shopping has never been easier. Need things fresh?
            Whether it’s fruits and vegetables or dairy and meat, we have this
            covered as well! Get fresh eggs, meat, fish and more online at your
            convenience. Hassle-free Home Delivery options
            We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time.


    <ul>
        <li>
        Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
        </li>
        <li>
        Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
        </li>
        <li>
        BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
        </li>
    </ul>

          </p>
          <div className="heading">
            <h2>India’s biggest Online Supermarket</h2>
            <hr></hr>
          </div>
          <p>
            bigbasket.com believes in providing the highest level of customer
            service and is continuously innovating to meet customer
            expectations. Our On-time Guarantee is one such assurance where we
            refund 10% of the bill value if the delivery is delayed. For all
            your order values above Rs. 1000, we provide free delivery. A wide
            range of imported and gourmet products are available through our
            express delivery and slotted delivery service. If you ever find an
            item missing on delivery or want to return a product, you can report
            it to us within 48 hours for a ‘no-questions-asked’ refund. Best
            quality products for our quality-conscious customers. bigbasket.com
            is synonymous with superior quality and continues to strive for
            higher levels of customer trust and confidence, by taking feedback
            and giving our customers what they want. We have added the
            convenience of pre-cut fruits in our Fresho range. If it’s a product
            category you’re looking to shop from, we’ve made it convenient for
            you to access all products in a section easily. For instance, if
            you’re looking for beverages, you can order from a long list of
            beverages that include cool drinks, hot teas, fruit juices and more.
            We are proud to be associated closely with the farmers from whom we
            source our fresh products. Most of our farm-fresh products are
            sourced directly from farmers, which not only ensures the best
            prices and freshest products for our customers but also helps the
            farmers get better prices. With more than 80 Organic Fruits and
            Vegetables and a wide range of organic staples, bigbasket has the
            largest range in the organic products category. When it comes to
            payment, we have made it easy for our customers can pay through
            multiple payment channels like Credit and Debit cards, Internet
            Banking, e-wallets and Sodexo passes or simply pay Cash on Delivery
            (COD).The convenience of shopping for home and daily needs, while
            not compromising on quality, has made bigbasket.com the online
            supermarket of choice for thousands of happy customers across India.
          </p>
        </div>

        </div>
        <div className='footer-links'>
        <div className='footer-links-item'>
            <h2>FreshMart</h2>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-links-item'>
            <h2>Help</h2>
            <ul>
                <li>Payment</li>
                <li>Shipping</li>
                <li>Cancellation & Returns</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='download-app'>
            <h2>Download App</h2>
            <ul>
                <li><img src='https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/Google-App-store-icon.png?raw=true' alt='app-store' /></li>
                <li><img src='https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/Apple-App-store-icon.png?raw=true' alt='play-store' /></li>
            </ul>
        </div>
        <div className='footer-social-links'>
            <h2>Social Links</h2>
            <ul>
                <li><img src='https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/facebook.png?raw=true' alt='facebook' /></li>
                <li><img src='https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/instagram.png?raw=true' alt='instagram' /></li>
                <li><img src='https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/twitter.png?raw=true' alt='twitter' /></li>
            </ul>
        </div>
        </div>
        <div className='newsletter'>
            <h2>Newsletter</h2>
            <input type='email' placeholder='Enter your email to get latest updates' value={useremail} onChange={(e) => setuserEmail(e.target.value)} />
            <button onClick={(e) => handleSubmit(e)}>Subscribe</button>
            <p>{message}</p>
        </div>
        <div className='footer-copyright container bg-dark'>
            <p>Copyright © 2024 Online Grocer Shop. All rights reserved.</p>
        </div>
        </div>
  )
}

export default Footer
