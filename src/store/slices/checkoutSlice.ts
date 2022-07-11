import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type CheckoutState = {
  enabled: boolean;
};

const initialState: CheckoutState = {
  enabled: false,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    enableCheckout: (state) => {
      state.enabled = true;
    },
  },
});

export default checkoutSlice.reducer;

export const selectCheckout = (state: RootState) => state.checkout.enabled;
