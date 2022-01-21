import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Add, Remove } from '@material-ui/icons';
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container, 
  Desc, 
  Filter, 
  FilterColor, 
  FilterContainer, 
  FilterSize, 
  FilterSizeOption, 
  FilterTitle, 
  Image, 
  ImageContainer, 
  InfoContainer, 
  Price, 
  Title, 
  Wrapper, 
} from './Styles';
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import { ApiServices } from '../../services/apiServices';

export default function Product() {
  const annoucementText = 'Super Deal! Free Shipping on Orders Over $50';
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const apiServices = new ApiServices();
    apiServices.getProduct(id).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {};

  return (
    <Container>
      <Navbar />
      <Announcement text={annoucementText} />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor key={c} color={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} style={{ cursor: 'pointer' }} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
