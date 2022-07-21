import { Snackbar, AlertColor, Alert } from '@mui/material';
import { useState } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { actions } from '../../store';

type NotificationProps = {
  type: AlertColor;
  message: string;
};

export default function index({ type, message }: NotificationProps) {
  const [open, setOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={2000}
      onClose={() => {
        dispatch(actions.notificationReset());

        setOpen(false);
      }}
    >
      <Alert variant="filled" severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
