import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  quantity: number;
  price: number;
  subtotal: number;
};

export type Cart = {
  products: Product[];
  total: number;
};

type CartState = {
  value: Cart;
};

const initialState: CartState = {
  value: {
    products: [],
    total: 0,
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeCartProduct: () => {},
    insertCartProduct: (state, action) => {
      const { id } = action.payload;

      const existingProductIndex = state.value.products.findIndex(
        (product) => product.id === id
      );

      if (existingProductIndex > 0)
        state.value.products.splice(existingProductIndex, 1, action.payload);
      else state.value.products.push(action.payload);

      state.value.total = state.value.products.reduce((accum, product) => {
        accum += product.subtotal;

        return accum;
      }, 0);
    },
  },
});

export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
