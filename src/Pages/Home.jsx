import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import HomeCategory from '../Components/HomeCategory'
import './Home.css';
import { Card } from 'react-bootstrap'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CrouselComp from '../Components/CrouselComp';
import SmartBusket from '../Components/SmartBusket';

const Home = () => {
  return (
    <div className='home-container container'>
    
      <NavbarComp/>
      <HomeCategory/>
      <CrouselComp img={[
         'https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekdayblore_460_040522.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Freshodays_Bangalore_460_0405022.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_c_YXTT611_460_1may22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_Happychef_460-250422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_GM-SteeltheDeal!_460-250422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_skincare_460-250422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_Dairy(Curd)_460-250422.jpg'
      ]}/>
      <SmartBusket/>
    </div>
  )
}

export default Home
