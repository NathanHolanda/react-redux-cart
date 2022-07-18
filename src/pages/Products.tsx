import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
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

  return (
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
            <Grid item>
              <ProductCard
                key={product.id}
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
  );
}
