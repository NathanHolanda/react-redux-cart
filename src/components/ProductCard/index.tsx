import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  styled,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import useAppDispatch from '../../hooks/useAppDispatch';
import { actions } from '../../store';
import styles from './styles.module.scss';

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

const QuantityField = styled(TextField)(({ theme }) => ({
  width: '4rem',

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.text.primary,
  },

  '& .MuiInputBase-input': { padding: '0' },

  '& .MuiOutlinedInput-root': {
    padding: '1rem .75rem',
    height: '1.2rem',
    borderColor: theme.palette.text.primary,
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: grey[500],
    },
  },

  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,

    '&.Mui-focused': {
      color: theme.palette.text.primary,
    },
  },
}));

export default function ProductCard({
  id,
  title,
  description,
  price,
  thumbnail,
}: ProductCardProps) {
  const theme = useTheme();

  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const addToCart = () => {
    const subtotal = quantity * price;

    const product = {
      id,
      title,
      thumbnail,
      quantity,
      price,
      subtotal,
    };

    dispatch(actions.insertCartProduct(product));
  };

  return (
    <Grid p={4} item>
      <Card
        sx={{
          maxWidth: '300px',
          boxShadow: '-2px 2px 10px 0px #0006',
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <CardMedia
          component="img"
          image={thumbnail}
          height="150px"
          alt={title}
        />
        <CardContent
          sx={{
            p: 3,
            height: '12rem',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginY="1rem"
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                color: theme.palette.text.primary,
              }}
            >
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(price)}
            </Typography>
            <QuantityField
              label="Quant."
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(+event.target.value)}
              inputProps={{
                min: 1,
                step: 1,
              }}
            />
          </Box>
          <Typography
            className={styles.productDescription}
            sx={{
              fontSize: '1rem',
              height: '4.25rem',
              color: theme.palette.text.primary,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 4, p: 4, justifyContent: 'center' }}>
          <Button
            onClick={() => addToCart()}
            color="success"
            variant="outlined"
            endIcon={<IoMdCart />}
            sx={{ fontWeight: 'bold' }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
