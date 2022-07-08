import { Alert } from '@mui/material';
import { useState } from 'react';

export default function index() {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <Alert
      hidden={hidden}
      severity="success"
      onClose={() => {
        setHidden(true);
      }}
    >
      This is a success alert — check it out!
    </Alert>
  );
}
