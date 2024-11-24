import React,{useState,useEffect} from 'react'
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminLogin = () => {
  const navigate=useNavigate();
//   const [email,setEmail]=useState('');
//   const [password,setPassword]=useState('');
  const [admin,setAdmin]=useState([]);
  const [formData,setFormData]=useState({
    email:'',
    password:''
  });

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const getAllAdmin = async()=>{
    const res=await fetch('http://localhost:5000/Admin');
    const data=await res.json();
    setAdmin(data);
  }

  useEffect(()=>{
    getAllAdmin();
  },[])

    useEffect(()=>{
      console.log(formData);
    },[formData])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const adminData=admin.find((admin)=>admin.email===formData.email && admin.password===formData.password);
    if(adminData){
        let timerInterval;
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        text: 'Welcome to the admin dashboard',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen:()=>{
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector('b');
          timerInterval = setInterval(()=>{
          },2000);
        },
        willClose:()=>{
          clearInterval(timerInterval);
        }
      }).then(()=>{
        navigate('/adminhome');
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email or password',
      })
    }
  }
  return (
    <div className='container admin-login-container'>
    <button onClick={()=>navigate('/')} className='back-btn'>Back to Main website</button>
    <div id="login-page">
  <div className="login">
    <h2 className="login-title">Login</h2>
    <p className="notice">Please login to access the system</p>
    <form className="form-login" onSubmit={handleSubmit}>
      <label for="email">E-mail</label>
      <div className="input-email">
        <i className="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Enter your e-mail" required value={formData.email} onChange={handleChange}/>
      </div>
      <label for="password">Password</label>
      <div className="input-password">
        <i className="fas fa-lock icon"></i>
        <input type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange}/>
      </div>
      {/* <div className="checkbox">
        <label for="remember">
          <input type="checkbox" name="remember"/>
          Remember me
        </label>
      </div> */}
      <button type="submit"><i className="fas fa-door-open"></i> Sign in</button>
    </form>
      <a href="#">Forgot your password?</a>

  </div>
  <div className="background">
    <h1>Great power comes great responsibility, kindly keep your password safe!</h1>
  </div>
</div>
</div>
  )
}

export default AdminLogin
