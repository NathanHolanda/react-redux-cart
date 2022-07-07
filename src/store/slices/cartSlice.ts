import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type Product = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  subtotal: number;
};

type Cart = {
  products: Product[];
  total: number;
};

const initialState: Cart = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeProduct: () => {},
    insertProduct: (state, action) => {
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
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
