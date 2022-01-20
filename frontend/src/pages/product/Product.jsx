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

export default function Product() {
  const annoucementText = 'Super Deal! Free Shipping on Orders Over $50';
  return (
    <Container>
      <Navbar />
      <Announcement text={annoucementText} />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
