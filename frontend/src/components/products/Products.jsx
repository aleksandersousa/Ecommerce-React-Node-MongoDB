import { Container } from './Styles';
import Product from '../product/Product';
import { popularProducts } from '../../data';

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}
