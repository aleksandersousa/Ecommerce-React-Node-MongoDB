import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Add, Remove } from '@material-ui/icons';
import {
  Bottom, 
  Button, 
  Container, 
  Details, 
  Hr, 
  Image, 
  Info, 
  PriceDetail, 
  Product, 
  ProductAmount, 
  ProductAmountContainer, 
  ProductColor, 
  ProductDetail, 
  ProductId, 
  ProductName, 
  ProductPrice, 
  ProductSize, 
  Summary, 
  SummaryItem, 
  SummaryItemPrice, 
  SummaryItemText, 
  SummaryTitle, 
  Title, 
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper, 
} from './Styles';
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import { ApiServices } from '../../services/apiServices';

const annoucementText = 'Super Deal! Free Shipping on Orders Over $50';
const KEY = process.env.REACT_APP_STRIPE;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    if (stripeToken && cart.total >= 1) {
      const apiServices = new ApiServices();
      const data = { tokenId: stripeToken.id, amount: cart.total * 100 };
  
      apiServices.performPayment(data).then((res) => {
        // navigate('/success', { state: { stripeData: res.data, products: cart } });
        console.log('success');
      });
    }
  }, [stripeToken, cart.total, navigate, cart]);

  return (
    <Container>
      <Navbar />
      <Announcement text={annoucementText} />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <>
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="E-commerce"
              image="https://i.ibb.co/Qc5jqgC/shopping-transparent-retail-retail-shop-icon-115534289901afwqzeet7.png"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
