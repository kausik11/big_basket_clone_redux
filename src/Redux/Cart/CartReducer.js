import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        subTotal:0,
    },reducers:{
      addProduct:(state,action)=>{
        // console.log("action is", action);
            const newItem = action.payload;
            const existingItem = state.cart.find(item=>item.id===action.payload.id);
            if(existingItem){
                existingItem.quantity += newItem.quantity;
                }else{
            state.cart.push({...newItem})
                }
                const subTotal = state.cart.reduce((acc,item)=>acc+item.productprice*item.quantity,0);
                state.subTotal = subTotal;
                // console.log('state after adding item',state.cart);
            },
            removeProduct:(state,action)=>{
                state.cart = state.cart.filter(item=>item.id !== action.payload.id)
                },
            clearCart:(state)=>{
                state.cart = [];
                state.subTotal = 0;
            },
            addQuantity:(state,action)=>{
                const {id,quantity} = action.payload;
                const existingItem = state.cart.find(item=>item.id===id);
                if(existingItem){
                    existingItem.quantity += quantity;
                }
                const subTotal = state.cart.reduce((acc,item)=>acc+item.productprice*item.quantity,0);
                state.subTotal = subTotal;
                console.log("after quantity update",state.cart);
            },
            
}})
export const {addProduct,removeProduct,clearCart,addQuantity} = CartSlice.actions;
export default CartSlice.reducer;
