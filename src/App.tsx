import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Box, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useEffect } from 'react';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import light from './themes/light';
import dark from './themes/dark';
import useAppSelector from './hooks/useAppSelector';
import { selectTheme } from './store/slices/themeSlice';
import useAppDispatch from './hooks/useAppDispatch';
import { actions } from './store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.setInitialState());
  });

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
      <Box sx={{ width: '100%', backgroundColor: theme.palette.primary.main }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
