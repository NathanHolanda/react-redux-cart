import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import Notification from '../components/Notification';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import useAppSelector from '../hooks/useAppSelector';
import { selectNotification } from '../store/slices/notificationSlice';
import getProducts from '../services/getProducts';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, [getProducts]);

  const notificationState = useAppSelector(selectNotification);

  return (
    <>
      {notificationState.requested && (
        <Notification type="info" message="Product is being added to cart." />
      )}

      {notificationState.done ? (
        notificationState.error ? (
          <Notification
            type="error"
            message="Error while adding product to cart."
          />
        ) : (
          <Notification
            type="success"
            message="Product was added to cart successfully."
          />
        )
      ) : (
        ''
      )}

      <BasicLayout>
        <Grid
          m="auto"
          justifyContent="center"
          container
          columnSpacing={6}
          rowSpacing={6}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <Grid item key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  thumbnail={product.thumbnail}
                />
              </Grid>
            ))
          ) : (
            <Box display="flex" justifyContent="center" mt="10rem">
              <Spinner />
            </Box>
          )}
        </Grid>
      </BasicLayout>
    </>
  );
}
