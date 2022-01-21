import { Link } from 'react-router-dom';
import {
  Container, Image, Info, Title, Button, 
} from './Styles';

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`products/${item.categorie}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}
