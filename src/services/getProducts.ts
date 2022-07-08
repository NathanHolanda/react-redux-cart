import axios from 'axios';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

const getProducts = async () => {
  const {
    data: { products },
  } = await axios.get('https://dummyjson.com/products?limit=30');

  return products as Product[];
};

export default getProducts;
