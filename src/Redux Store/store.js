import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'
import productSlice from './productSlice'
import { saveDatatoLS } from '../LocalStorage/cartLoacalStorage';

export const store = configureStore({
    reducer:{
       cart: cartSlice,
       product : productSlice
    }
})

store.subscribe(()=>{
    const state = store.getState()
    saveDatatoLS(state.cart)
})