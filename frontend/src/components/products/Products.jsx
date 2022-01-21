import { useEffect, useState } from 'react';
import { Container } from './Styles';
import { ApiServices } from '../../services/apiServices';
import Product from '../product/Product';

export default function Products({ category, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getProducts().then((res) => {
      setProducts(res.data);
    });
  }, [category]);

  useEffect(() => {
    category && setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key, value]) => 
          item[key].includes(value))),
    );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {category ? filteredProducts.map((item) => (
        <Product key={item._id} item={item} />
      )) : products.slice(0, 8).map((item) => (
        <Product key={item._id} item={item} />
      ))}
    </Container>
  );
}
