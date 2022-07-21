import { Box, Button, Typography, useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicLayout from '../components/BasicLayout';
import CartProductCard from '../components/CartProductCard';
import CartTotalPrice from '../components/CartTotalPrice';
import Spinner from '../components/Spinner';
import Notification from '../components/Notification';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { actions } from '../store';
import { CartState, selectCart } from '../store/slices/cartSlice';
import { selectNotification } from '../store/slices/notificationSlice';

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

  const notificationState = useAppSelector(selectNotification);

  const theme = useTheme();

  return (
    <BasicLayout>
      {notificationState.requested && (
        <Notification type="info" message="Product is being removed." />
      )}

      {notificationState.done ? (
        notificationState.error ? (
          <Notification type="error" message="Error while removing product." />
        ) : (
          <Notification
            type="success"
            message="Product was removed successfully."
          />
        )
      ) : (
        ''
      )}

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
              variant="outlined"
            >
              Go to payment
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
    </BasicLayout>
  );
}
