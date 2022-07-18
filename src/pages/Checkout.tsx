import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicLayout from '../components/BasicLayout';
import CheckoutForm from '../components/Form/CheckoutForm';
import useAppSelector from '../hooks/useAppSelector';
import { selectCheckout } from '../store/slices/checkoutSlice';

export default function Checkout() {
  const navigate = useNavigate();

  const checkoutEnabled = useAppSelector(selectCheckout);

  useEffect(() => {
    if (!checkoutEnabled) navigate('/cart');
  }, []);

  return (
    <>
      <Box />
      {checkoutEnabled && (
        <BasicLayout>
          <CheckoutForm />
        </BasicLayout>
      )}
    </>
  );
}
