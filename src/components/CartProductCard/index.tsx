import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Notification from '../Notification';
import useAppDispatch from '../../hooks/useAppDispatch';
import { actions } from '../../store';
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

  const [removeProductButtonClicked, setRemoveProductButtonClicked] =
    useState<boolean>(false);
  const [errorRemovingProduct, setErrorRemovingProduct] =
    useState<boolean>(false);

  const removeProduct = useCallback(
    (id: number) => {
      try {
        dispatch(actions.removeCartProduct({ id }));
      } catch (err) {
        setErrorRemovingProduct(true);
      }
    },
    [actions.removeCartProduct]
  );

  return (
    <>
      {removeProductButtonClicked && (
        <Notification
          type={errorRemovingProduct ? 'error' : 'success'}
          message={
            errorRemovingProduct
              ? 'Error while removing product.'
              : 'Product removed successfully.'
          }
        />
      )}

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
            onClick={() => {
              setRemoveProductButtonClicked(true);
              removeProduct(id);
            }}
            sx={{ fontSize: '2rem' }}
            color="error"
          >
            <RiDeleteBin5Line />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
