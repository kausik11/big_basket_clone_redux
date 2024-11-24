import React,{useState,useEffect} from 'react'
import './LoginSignup.css'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import { loginn,logout } from '../Redux/Auth/AuthReducer';
import {v4 as uuidv4} from 'uuid';

const LoginSignup = ({setLoginSignup}) => {
 
  const dispatch = useDispatch();
  // Accessing state from Redux store
  const { isLoggedIn, isLoading, error } = useSelector((state) => state.auth);

    const [login,setLogin]=useState(true); //this state is for login and signup
    const [allUser,setAllUser]=useState([]); //this state is for all users, we will get all users from db.json
   const [formData,setFormData]=useState({
    email:'',
      password:'',
      username:''
    });

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormData((prevData)=>({...prevData,[name]:value}));
      // console.log(formData);
    }

    const payload= login ? {
      email:formData.email,
      password:formData.password
    } : {
      username:formData.username,
      email:formData.email,
      password:formData.password,
      token:uuidv4()
    }

    const getAllUser = async()=>{
      const res = await axios.get('http://localhost:5000/Users');
      setAllUser(res.data);
    }

    const handleSubmit=(e)=>{
    e.preventDefault();  
    if(!login){
      if(allUser.find(user=>user.email===formData.email)){
        alert('User already exists');
        return;
      }
      
      axios.post('http://localhost:5000/Users',payload)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }
    const user = allUser.find(user=>user.email===payload.email && user.password===payload.password);
    if(!user){
      alert('Invalid email or password');
      return;
    }
    dispatch(loginn(allUser.id));
    setLoginSignup(false);
  }

  useEffect(()=>{
    getAllUser();
  },[])


  return (
    <div className='loginSignup-overlay'>
    <div className={`loginSignup-container ${login ? 'slide-in' : 'slide-out'}`}>
      <h2 className='loginSignup-title'>{login ? 'Login' : 'Sign Up'}</h2>
      <p className='loginSignup-subtitle'>Welcome to our platform! Please enter your details to continue.</p>
      <button className='close-button' onClick={()=>setLoginSignup(false)}><CloseIcon/></button>
      <form onSubmit={handleSubmit}>
            {login ? (<>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name='email' placeholder="Enter your email" onChange={handleChange} value={formData.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name='password' placeholder="Enter your password" onChange={handleChange} value={formData.password} />
              </div>
              <button type="submit" className="btn-submit">Login</button>
            </>):(<>
                <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name='username' placeholder="Enter your username" onChange={handleChange} value={formData.username} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name='email' placeholder="Enter your email" onChange={handleChange} value={formData.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name='password' placeholder="Create a password" onChange={handleChange} value={formData.password} />
              </div>
              <button type="submit" className="btn-submit">Sign Up</button>
            </>)}
      </form>
      <button className='btn-submit' onClick={()=>setLogin((prev)=>!prev)}>{login ? 'New? Create an account' : 'Have an account? Login'}</button>
    </div>
    </div>
  )
}

  

export default LoginSignup;
