import {
  BrowserRouter as Router, Routes, Route, Navigate, 
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Success from './pages/success/Success';

export default function RoutesLogic() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
