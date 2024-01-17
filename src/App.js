import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Fqa from './component/Fqa';

function App() {
  return (
    <div className="App ml-10 mr-10">
      <Navbar/>
      <Home />
      <Fqa/>
    </div>
  );
}

export default App;
