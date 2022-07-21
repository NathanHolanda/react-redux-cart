import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type NotificationState = {
  requested: boolean;
  loading: boolean;
  error: boolean;
  done: boolean;
};

const initialState: NotificationState = {
  requested: false,
  loading: false,
  error: false,
  done: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setRequestedNotification(state) {
      state.requested = true;

      state.done = false;
      state.error = false;
      state.loading = true;
    },
    setErrorNotification(state) {
      state.done = true;
      state.error = true;

      state.requested = false;
      state.loading = false;
    },
    setDoneNotification(state) {
      state.done = true;
      state.error = false;

      state.loading = false;
      state.requested = false;
    },
    notificationReset(state) {
      state.requested = false;
      state.done = false;
      state.error = false;
      state.loading = false;
    },
  },
});

export default notificationSlice.reducer;

export const selectNotification = (state: RootState) => state.notification;
