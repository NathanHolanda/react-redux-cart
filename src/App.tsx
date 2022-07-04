import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
