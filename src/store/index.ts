import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from './slices/counterSlice';
import themeReducer, { themeSlice } from './slices/themeSlice';
import cartReducer, { cartSlice } from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});

export const actions = {
  ...counterSlice.actions,
  ...themeSlice.actions,
  ...cartSlice.actions,
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
