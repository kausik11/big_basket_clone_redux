import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';


export const loginn = createAsyncThunk('auth/login',async(payload)=>{
  try {
    const response = await axios.get('http://localhost:5000/Users',payload);
    const result = response.data;
    // console.log("result",result[0].token);
    localStorage.setItem('token',result[0].token);
    localStorage.setItem('userId',result[0].id);
    return result;
  } catch (error) {
    return error;
  }
})

export const logout = createAsyncThunk('auth/logout',async()=>{
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        return null;
    } catch (error) {
        return error;
    }
  
})


const AuthSlice = createSlice({
  name:'auth',
  initialState:{
    isLoggedIn:localStorage.getItem('token')?true:false,
    userToken:localStorage.getItem('token'),
    username:'',
    isLoading:false,    
    error:null,
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(loginn.pending,(state,action)=>{
      state.isLoading= true;
      state.error=null;
    })
    .addCase(loginn.fulfilled,(state,action)=>{
      state.isLoggedIn=true;
      state.userToken=action.payload;
      state.username=action.payload.username;
      state.isLoading=false;
    })
    .addCase(loginn.rejected,(state,action)=>{
      state.isLoading=false;
      state.error=action.error.message;
    })
    .addCase(logout.fulfilled,(state,action)=>{
      state.isLoggedIn=false;
      state.userToken=null;
    })
  }
})

export default AuthSlice.reducer;
