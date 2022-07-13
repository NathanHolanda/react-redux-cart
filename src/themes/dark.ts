import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const dark = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[800],
    },
    text: {
      primary: grey[200],
      secondary: grey[400],
    },
    success: {
      main: '#4caf50',
    },
  },
});

export default dark;
