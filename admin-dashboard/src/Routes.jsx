import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import './Routes.scss';
import UserList from './pages/userList/UserList';

export default function RoutesLogic() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}
