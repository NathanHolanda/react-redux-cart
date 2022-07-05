import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { IoMdCart } from 'react-icons/io';

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
  return (
    <Grid p={4} item>
      <Card
        sx={{
          maxWidth: '300px',
          boxShadow: '-2px 2px 10px 0px #0006',
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
              marginBottom: '1rem',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '.5rem' }}
          >
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </Typography>
          <Typography
            className="product-description"
            sx={{
              fontSize: '1rem',
              height: '4.25rem',
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
