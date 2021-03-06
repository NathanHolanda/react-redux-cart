import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: grey[100],
    },
    secondary: {
      main: grey[200],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
    success: {
      main: '#1b5e20',
    },
  },
});

export default light;
