import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import { useCallback } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import firebaseApi from '../../services/firebaseApi';
import { actions } from '../../store';
import { handleRemoveCartProduct } from '../../store/actions/cartActions';
import { Product, selectCart } from '../../store/slices/cartSlice';
import styles from './styles.module.css';

type CartProductCardProps = {
  id: number;
  title: string;
  thumbnail: string;
  quantity: number;
  subtotal: number;
};

export default function index({
  id,
  title,
  thumbnail,
  quantity,
  subtotal,
}: CartProductCardProps) {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectCart);

  const removeProduct = useCallback(
    async (id: number) => {
      dispatch(actions.setRequestedNotification());

      const products = [...cart.products];

      const filterById = (product: Product) => product.id === id;

      const itemToBeRemoved = products.find(filterById);
      const itemIndexToBeRemoved = products.findIndex(filterById);

      const total = cart.total - (itemToBeRemoved?.subtotal || 0);
      products.splice(itemIndexToBeRemoved, 1);

      try {
        await firebaseApi.put('/cart.json', {
          total: total > 0 ? total : null,
          products,
        });

        dispatch(
          handleRemoveCartProduct({
            productIndex: itemIndexToBeRemoved,
            newTotal: total,
          })
        );
      } catch (err) {
        dispatch(actions.setErrorNotification());
      }
    },
    [cart, actions.removeCartProduct, handleRemoveCartProduct]
  );

  return (
    <Card
      sx={{
        maxHeight: '130px',
        width: '600px',
        display: 'flex',
        my: '1rem',
        boxShadow: '2px 2px 10px 0px #0006',
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <CardMedia
        component="img"
        image={thumbnail}
        alt={title}
        sx={{ width: '200px' }}
      />
      <CardContent>
        <Typography
          className={styles.productTitle}
          component="h2"
          fontSize="1.3rem"
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography>Quantity: {quantity}</Typography>
        <Typography>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(subtotal)}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 'auto' }}>
        <Button
          onClick={() => removeProduct(id)}
          sx={{ fontSize: '2rem' }}
          color="error"
        >
          <RiDeleteBin5Line />
        </Button>
      </CardActions>
    </Card>
  );
}
