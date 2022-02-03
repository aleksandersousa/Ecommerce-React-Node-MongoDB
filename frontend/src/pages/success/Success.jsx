import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ApiServices } from '../../services/apiServices';
import { Button, Container } from './Styles';

export default function Success() {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (data) {
      const apiServices = new ApiServices();
      const body = {
        userId: currentUser._id,
        products: cart.products.map((item) => ({
          productId: item._id,
          quantity: item._quantity,
        })),
        amount: cart.total,
        address: data.billing_details.address,
      };
      apiServices.createOrder(body).then((res) => {
        setOrderId(res.data._id);
      });
    }
  }, [cart, data, currentUser]);

  return (
    <Container>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : 'Successfull. Your order is being prepared...'}
      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
    </Container>
  );
}
