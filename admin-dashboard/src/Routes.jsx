import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';

export default function RoutesLogic() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}
