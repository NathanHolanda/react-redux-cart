import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { IoMdCart } from 'react-icons/io';
import styles from './styles.module.scss';

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({
  title,
  description,
  price,
  thumbnail,
}: ProductCardProps) {
  const theme = useTheme();

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
            maxWidth: '20rem',
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
            <TextField
              className={styles.numberField}
              label="Quant."
              type="number"
              inputProps={{
                border: '4px solid black',
                min: 1,
                step: 1,
                defaultValue: 1,
              }}
              sx={{ width: '4rem' }}
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
          <Button color="success" variant="outlined" endIcon={<IoMdCart />}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
