import { Box, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useAppDispatch from './hooks/useAppDispatch';
import useAppSelector from './hooks/useAppSelector';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import { actions } from './store';
import fetchCartInitialState from './store/actions/cartActions';
import { selectTheme } from './store/slices/themeSlice';
import dark from './themes/dark';
import light from './themes/light';

function App() {
  const [isFirstRendering, setIsFirstRendering] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFirstRendering) {
      dispatch(actions.setThemeInitialState());
      dispatch(fetchCartInitialState());

      setIsFirstRendering(false);
    }
  }, [dispatch]);

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
