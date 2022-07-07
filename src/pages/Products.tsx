import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
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
  }, []);

  return (
    <>
      <Navbar />
      <Container
        component="main"
        sx={{
          p: '4rem',
        }}
      >
        <Grid m="auto" justifyContent="center" container spacing={2}>
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            ))}
        </Grid>
      </Container>
    </>
  );
}
