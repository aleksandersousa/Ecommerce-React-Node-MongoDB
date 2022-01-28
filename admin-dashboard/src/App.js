import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import RoutesLogic from './Routes';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <RoutesLogic />
      </div>
    </div>
  );
}

export default App;
