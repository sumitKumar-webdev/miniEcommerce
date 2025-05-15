import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        products:[],
    },
    newProduct : (state, action) =>{
        const newProduct = action.payload;
        const existingPro = state.products.find(product => (product.id === newPro.id));
        if (existingPro) {
            console.log('product Already existed in store');
            return
        }
        state.products.push(...newProduct)
    }
})

export const { newProduct } = productSlice.actions;
export default productSlice.reducer