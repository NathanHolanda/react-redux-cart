import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProductCard from '../components/CartProductCard';
import CartTotalPrice from '../components/CartTotalPrice';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { actions } from '../store';
import { CartState, selectCart } from '../store/slices/cartSlice';

export default function Cart() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleEnableChekout = useCallback(() => {
    dispatch(actions.enableCheckout());

    navigate('/checkout');
  }, [actions.enableCheckout]);

  const [cart, setCart] = useState({} as CartState);
  const cartState = useAppSelector(selectCart);

  useEffect(() => {
    setCart(cartState);
  }, [cartState]);

  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Container
        sx={{
          p: '4rem',
        }}
      >
        {!cart.isFetched ? (
          <Box display="flex" justifyContent="center" mt="10rem">
            <Spinner />
          </Box>
        ) : cart.total > 0 ? (
          <>
            <CartTotalPrice total={cart.total} />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              py="2rem"
            >
              {cart.products.map((product) => (
                <CartProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  quantity={product.quantity}
                  subtotal={product.subtotal}
                  thumbnail={product.thumbnail}
                />
              ))}
            </Box>
            <Box textAlign="right">
              <Button
                onClick={handleEnableChekout}
                color="success"
                sx={{ border: `${theme.palette.success.main} solid 1px` }}
              >
                Finalizar compra
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Typography
              textAlign="center"
              fontSize="2rem"
              mt="10rem"
              color={theme.palette.text.primary}
            >
              Não há nenhum produto no carrinho 😕
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
