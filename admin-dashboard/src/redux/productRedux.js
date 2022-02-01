import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    productStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    productFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1,
      );
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
  },
});

export const {
  productStart,
  productFailure,
  getProductSuccess,
  deleteProductSuccess,
  updateProductSuccess,
  addProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
