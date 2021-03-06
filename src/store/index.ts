import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartSlice } from './slices/cartSlice';
import checkoutReducer, { checkoutSlice } from './slices/checkoutSlice';
import themeReducer, { themeSlice } from './slices/themeSlice';
import notificationReducer, {
  notificationSlice,
} from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    notification: notificationReducer,
  },
});

export const actions = {
  ...themeSlice.actions,
  ...cartSlice.actions,
  ...checkoutSlice.actions,
  ...notificationSlice.actions,
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
