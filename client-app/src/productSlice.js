import { createSlice } from '@reduxjs/toolkit'
import { products } from './constants/products';
export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    value: products
  },
  reducers: {}
});


export default ProductSlice.reducer;

