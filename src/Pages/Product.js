import React,{useState,useEffect} from 'react'
import './Product.css'
import NavbarComp from '../Components/NavbarComp'
import CrouselComp from '../Components/CrouselComp'
import AllCategoryList from '../Components/AllCategoryList'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ItemCard from '../Components/ItemCard'



const Product = () => {
 
const [search,setSearch] = useState('');
const [product,setProduct] = useState([]);
const [loading,setLoading] = useState(false);
const [page,setPage] = useState(1);
const [totalProducts,setTotalProducts] = useState(0);//to count all the products
const perpage = 20;

//debounce function
const debounceFunc = (func,delay)=>{
  let timer;
  return (e)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>func(e),delay);
  }
}

  const searchProduct = async()=>{
    setLoading(true);
    const res = await axios.get('http://localhost:5000/products');
    const result = res.data.filter((item)=>item.productName.toLowerCase().includes(search));
    setProduct(result);
    setLoading(false);
  }

  const handleSearch = debounceFunc((e)=>{
    setSearch(e.target.value.toLowerCase());
  },1000);
  

  const fetchallData = async()=>{
    setLoading(true);
    const res = await axios.get('http://localhost:5000/products');
    const totalItems = res.data.length;//to count all the products get from the server
    setTotalProducts(totalItems);
    const result = res.data.slice((page-1)*perpage,page*perpage);
    setProduct(result);
    setLoading(false);
  }
  
   useEffect(()=>{fetchallData()},[])

   useEffect(()=>{if (search != '') {
    searchProduct();
   }else{
    fetchallData();
   }},[search])
  
  return (
    <>
    <NavbarComp/>
    <div className='mt-5'>
    <CrouselComp img={[
                'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9371_1200x300_07Mar22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL464-1200x300-25thmar.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL370-1200x300-25thmar.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL381-1200x300-25thmar.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/l1p_cmc_m_tataneu_300_100422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9374_1200x300_07Mar22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9373_1200x300_07Mar22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/L1_CXNP9372_1200x300_07Mar22.jpg',
            ]}/>
    </div>
    
    <div className='container product-container'>
      <div className='row'>
        <div className='col-md-3 mt-5'>
          <AllCategoryList/>
        </div>
        <div className='col-md-9 mt-5'>
          <h2>All Products</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Search" onChange={handleSearch}/>
              <Form.Label>Search For The Products</Form.Label>
            </Form.Group>
          </Form>
          <hr/> 
          <div className='row row-cols-1 row-cols-md-3 g-4'>
          {product.map((item)=><ItemCard item={item}/>)}
          </div>
          <div className='d-flex justify-content-center gap-2 mt-3'>
            <button className='btn btn-success col-md-3' onClick={()=>setPage(page-1)} disabled={page===1}>Previous Page</button>
            <button className='btn btn-success col-md-3' onClick={()=>setPage(page+1)} disabled={product.length<perpage}>Next Page</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product
