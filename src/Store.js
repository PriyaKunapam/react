import { configureStore, createSlice } from "@reduxjs/toolkit";

import Nonveg from "./Nonveg";
import Milk from "./Milk";
import Veg from "./veg";


// Initial product lists for Veg, NonVeg, and Milk
const productSlice = createSlice({
  name: 'products',
  initialState: {
    Veg: [
      { image: 'tomato.jpg',name:'tomato', price: 200.5 },
      { image: 'potato.jpg', name:'potato',price: 300.5 },
      { image: 'beans.jpg',name:'beans', price: 250.5 },
      { image: 'carrot.jpg',name:'carrot', price: 350.5 },
      { image: 'cauliflower.jpg',name:'cauliflower', price: 450.5 },
    ],
    Nonveg: [
      { image:'chiken.jpg',name:'chiken',price: 800.0 },
      { image: 'fish.jpg', name:'fish',price: 900.0 },
      { image: 'mutton.jpg',name:'mutton', price: 1000.0 },
    ],
    Milk: [
      { image: 'vijaya.jpg',name:'vijaya', price: 800.0 },
      { image: 'heritage.jpg',name:'heritage',price: 900.0 },
      { image: 'sangam.jpg',name:'sangam', price: 1000.0 },
      { image: 'amul.jpg',name:'amul', price: 700.0 },
      { image: 'Country Delight.jpg', name:'Country Delight',price: 100.0 },
    ],

      // New cart state to store added products
  },
  reducers: {},
});
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament:(state,action) => {
      const item=state.find(item => item.name === action.payload.name);
      if(item)
      {
        item.quantity +=1;
      }
    },
    decreament:(state,action) => {
      const item = state.find(item => item.name === action.payload.name);
      if(item && item.quantity > 1)
      {
        item.quantity -= 1;
      }
      else{
        return state.filter(item =>item.name !== action.payload.name);
      }
    },
    remove: (state,action)=>{
      return state.filter(item =>item.name !== action.payload.name);
    },
    clearCart: ()=>[]
 },
});
let purchaseDetailsSlice = createSlice({
  name:"purchaseDetails",
  initialState : [], 
  reducers: 
  {
    addPurchaseDetails: (state,action)=>{
        state.push(action.payload)
    },
  },
});
const authSclice=createSlice({
  name:"auth",
  initialState: {
    isAuthenticated: localStorage.getItem("username")? true: false,
    user: localStorage.getItem("username") || " ",
  },
  reducers:{
    login:(state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = " ";
      localStorage.removeItem("username");
    },
  },
});
// Configure the store with the products slice reducer
const store = configureStore({
  reducer: { 
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    purchaseDetails: purchaseDetailsSlice.reducer,
    auth: authSclice.reducer
  },
});
export const{addToCart, increament, decreament, remove,clearCart}=cartSlice.actions;
export default store;
export const{addPurchaseDetails}= purchaseDetailsSlice.actions;
export const{login, logout} = authSclice.actions