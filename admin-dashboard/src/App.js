import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
