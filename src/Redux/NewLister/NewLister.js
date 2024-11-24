import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const setEmail = createAsyncThunk('newLister/setEmail', async (email, {rejectWithValue}) => {
    try{
        const response = await axios.post('http://localhost:5000/newsLister', { email });
        return response.data;
    }catch(error){
        return rejectWithValue(error.response?.data);
    }
})

//check if email is already in the list
export const checkEmail = createAsyncThunk('newLister/checkEmail', async (email, {rejectWithValue}) => {
    try{
        const response = await axios.get(`http://localhost:5000/newsLister`);
        return response.data;
    }catch(error){
        return rejectWithValue(error.response?.data || "error in checking email");
    }
})


const newListerSlice = createSlice({
    name: 'newLister',
    initialState: {
        email: '',
        error: null,
        message: null,
    },
    extraReducers: (builder) => {
        builder.addCase(setEmail.pending, (state, action) => {
            state.email = action.payload;
            state.error = null;
            state.message = 'subscribing...';
        })
        builder.addCase(setEmail.fulfilled, (state, action) => {
            state.email = action.payload;
            state.error = null;
            state.message = 'subscribed successfully';
        })
        builder.addCase(setEmail.rejected, (state, action) => {
            state.error = action.payload.error;
            state.message = 'error in subscribing';
        })
        builder.addCase(checkEmail.pending, (state, action) => {
            state.error = null;
            state.message = 'checking email...';
        })
        builder.addCase(checkEmail.fulfilled, (state, action) => {
            const emailList = action.payload;
            const emailExists = emailList.some(item => item.email === state.email);
            state.error = null;
            state.message = emailExists ? 'Email already exists' : '';

        })
        builder.addCase(checkEmail.rejected, (state, action) => {
            state.email = action.payload;
            state.error = action.payload.error;
            state.message = action.payload.message;
        })
    }
})


export default newListerSlice.reducer;
