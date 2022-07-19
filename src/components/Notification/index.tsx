import { Snackbar, AlertColor, Alert } from '@mui/material';
import { useState } from 'react';

type NotificationProps = { type: AlertColor; message: string };

export default function index({ type, message }: NotificationProps) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Alert variant="filled" severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
