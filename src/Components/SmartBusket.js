import React from 'react'
import './SmartBusket.css';
import ProductSlider from './ProductSlider';
import BestSeller from './BestSeller';
import CrouselComp from './CrouselComp';

const SmartBusket = () => {
  return (
    <>
    <div className='smart-busket container'>
       <div className="contouter">
        <div className="outer d-flex flex-row justify-content-center align-items-center my-3 gap-4">
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_bbstar_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_precautionary_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_faq_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_combostore_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_dealsoftheweek_190x60_250422.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <h2>My Smart Basket</h2>
    <ProductSlider/>
    <BestSeller bestseller={'true'}/>
    <h2>Most Popular</h2>
    <div className="payment d-flex justify-content-center align-items-center">
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_bottles-mostpopularStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_summer-mostpopularStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_deo-mostpopularStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_store-mostpopularStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
      </div>
    <BestSeller category={'Cleaning'}/>
   <CrouselComp img={[
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_lauki_cxnp-9690_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_shukto_cxnp-9692_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_bhapa_cxnp-9689_400_050522.jpg",
        ]}/>
    </>
  )
}

export default SmartBusket
