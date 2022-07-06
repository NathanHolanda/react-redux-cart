import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type ThemeState = {
  value: string;
};

const initialState: ThemeState = {
  value: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.value === 'light') state.value = 'dark';
      else state.value = 'light';

      localStorage.setItem('reactReduxCart.cart', JSON.stringify(state));
    },
    setInitialState(state) {
      const json = localStorage.getItem('reactReduxCart.cart');

      if (json) state.value = JSON.parse(json).value ?? 'light';
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
