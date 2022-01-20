import { Container } from './Styles';
import { categories } from '../../data';
import CategoryItem from '../categoryItem/CategoryItem';

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}
