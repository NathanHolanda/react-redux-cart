import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import firebaseApi from '../../services/firebaseApi';

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
    removeCartProduct: () => {},
    insertCartProduct: (state, action) => {
      const { id } = action.payload;

      const existingProductIndex = state.products.findIndex(
        (product) => product.id === id
      );

      if (existingProductIndex > 0)
        state.products.splice(existingProductIndex, 1, action.payload);
      else state.products.push(action.payload);

      state.total = state.products.reduce((accum, product) => {
        accum += product.subtotal;

        return accum;
      }, 0);

      firebaseApi.put('/cart.json', state).catch((err) => {
        throw err;
      });
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
