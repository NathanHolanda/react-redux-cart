import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import styles from './styles.module.scss';

type CartProductCardProps = {
  title: string;
  thumbnail: string;
  quantity: number;
  subtotal: number;
};

export default function index({
  title,
  thumbnail,
  quantity,
  subtotal,
}: CartProductCardProps) {
  const theme = useTheme();

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
          component="h3"
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
    </Card>
  );
}
