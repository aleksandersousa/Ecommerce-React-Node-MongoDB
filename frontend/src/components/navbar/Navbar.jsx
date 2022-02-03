import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import {
  Center, 
  Container, 
  Input, 
  Language, 
  Left, 
  Logo, 
  MenuItem, 
  Right, 
  SearchContainer, 
  Wrapper, 
} from './Styles';

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>E-COMMERCE</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart" style={{ color: 'inherit' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
