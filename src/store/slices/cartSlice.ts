import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export type Product = {
  id: number;
  title: string;
  thumbnail: string;
  quantity: number;
  price: number;
  subtotal: number;
};

export type CartState = {
  products: Product[];
  total: number;
  isFetched: boolean;
};

const initialState: CartState = {
  products: [],
  total: 0,
  isFetched: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeCartProduct: (state, action) => {
      state.total = action.payload.newTotal;
      state.products.splice(action.payload.productIndex, 1);
    },
    insertCartProduct: (state, action) => {
      state.total = action.payload.newTotal;
      if (action.payload.existingProductIndex >= 0)
        state.products.splice(
          action.payload.existingProductIndex,
          1,
          action.payload.newProduct
        );
      else state.products.push(action.payload.newProduct);
    },
    setCartInitialState: (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.isFetched = true;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
