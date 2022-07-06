import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import light from './themes/light';
import dark from './themes/dark';
import useAppSelector from './hooks/useAppSelector';
import { selectTheme } from './store/slices/themeSlice';

function App() {
  const themeType = useAppSelector(selectTheme);
  const theme = themeType === 'light' ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          '*': {
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
            fontFamily: '"Roboto", sans-serif',
          },
          body: {
            backgroundColor: themeType === 'light' ? grey[100] : grey[900],
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
