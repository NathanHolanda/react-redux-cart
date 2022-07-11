import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useAppSelector from '../hooks/useAppSelector';
import { selectCheckout } from '../store/slices/checkoutSlice';

export default function Checkout() {
  const navigate = useNavigate();

  const checkoutEnabled = useAppSelector(selectCheckout);

  useEffect(() => {
    if (!checkoutEnabled) navigate('/cart');
  }, []);

  return (
    checkoutEnabled && (
      <>
        <Navbar />
        <div>Checkout</div>
      </>
    )
  );
}
