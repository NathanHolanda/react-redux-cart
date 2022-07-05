import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import './styles.css';

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          '*': {
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
            fontFamily: '"Roboto", sans-serif',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
