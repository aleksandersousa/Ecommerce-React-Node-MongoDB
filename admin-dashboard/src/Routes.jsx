import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';

export default function RoutesLogic() {
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  return (
    <Router>
      {admin && <Topbar />}
      <div className="container">
        {admin && <Sidebar />}
        <Routes>
          <Route exact path="/" element={admin ? <Home /> : <Login />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
          <Route exact path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
}
