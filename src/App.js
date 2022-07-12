
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import AboutUs from './Container/AboutUs/AboutUs';
import Header from './Container/Header/Header';
import SpecialMenu from './Container/Menu/SpecialMenu';

function App() {
  return (
    <div className="App">
      <Navbar />
  <Header /> 
  <AboutUs />
  <SpecialMenu />
      <div>Zahra Olanrewaju</div>
    </div>
  );
}

export default App;
