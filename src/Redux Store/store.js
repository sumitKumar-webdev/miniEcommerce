import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'
import { saveDatatoLS } from '../LocalStorage/cartLoacalStorage';

export const store = configureStore({
    reducer:{
       cart: cartSlice,
    }
})

store.subscribe(()=>{
    const state = store.getState()
    saveDatatoLS(state.cart)
})