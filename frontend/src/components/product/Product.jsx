import { Link } from 'react-router-dom';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import {
  Container, Circle, Image, Info, Icon, 
} from './Styles';

export default function Product({ item }) {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id} `} style={{ color: 'black' }}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}
