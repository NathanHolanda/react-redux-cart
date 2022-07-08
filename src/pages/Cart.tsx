import { Box, Container, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import CartProductCard from '../components/CartProductCard';
import CartTotalPrice from '../components/CartTotalPrice';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import useAppSelector from '../hooks/useAppSelector';
import { Cart, selectCart } from '../store/slices/cartSlice';

export default function CartComponent() {
  const [cart, setCart] = useState<Cart>({ total: 0, products: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const cartState = useAppSelector(selectCart);

  useEffect(() => {
    setCart(cartState);
    setIsLoading(false);
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
        {isLoading && (
          <Box display="flex" justifyContent="center" mt="10rem">
            <Spinner />
          </Box>
        )}
        {cart.total <= 0 && !isLoading ? (
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
        ) : (
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
                  title={product.title}
                  quantity={product.quantity}
                  subtotal={product.subtotal}
                  thumbnail={product.thumbnail}
                />
              ))}
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
