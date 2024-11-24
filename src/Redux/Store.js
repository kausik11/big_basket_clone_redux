import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthReducer';
import CartReducer from './Cart/CartReducer';
import NewListerReducer from './NewLister/NewLister';
const Store = configureStore({
  reducer:{
    auth:AuthReducer,
    cart:CartReducer,
    newLister:NewListerReducer
  }
})

export default Store;