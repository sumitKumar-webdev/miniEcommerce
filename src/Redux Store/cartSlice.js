import { createSlice } from "@reduxjs/toolkit";
import { cartDatafromLS } from "../LocalStorage/cartLoacalStorage";
const initialState = cartDatafromLS() || {
     products : [],
     totalPrice : 0,
     totalProducts : 0
}

const cartSlice = createSlice({
    name: 'cart',
   initialState,
    reducers:{
        addToCart : (state, action) => {
            const newPro = action.payload;
                     
            
            const existingPro = state.products.find(product => (product.id === newPro.id));
            state.totalPrice += newPro.price;
            state.totalProducts ++;

            if (existingPro) {
               existingPro.quantity++
            }else{
                state.products.push({...newPro, quantity:1})
            }

        },

        removeFromCart : (state, action) => {
            const existingPro = state.products.find(product => (product.id === action.payload.id))
            if (existingPro) {
                state.totalPrice -= (existingPro.price)*(existingPro.quantity) 
                state.totalProducts -= existingPro.quantity
                state.products = state.products.filter((product)=> product.id !== existingPro.id )
                }
        },
        incQnty : (state,action) =>{
            const product = state.products.find(product => (product.id === action.payload.id))
            if (product) {
                product.quantity++,
                state.totalPrice += product.price,
                state.totalProducts ++
            }
        },
        decQnty : (state, action) => {
            const product = state.products.find(product => (product.id === action.payload.id))
            if (product && product.quantity>1) {
                product.quantity--,
                state.totalPrice -= product.price,
                state.totalProducts --
            }
        }
    }
})
export const {addToCart, removeFromCart, incQnty, decQnty} = cartSlice.actions;
export default cartSlice.reducer;