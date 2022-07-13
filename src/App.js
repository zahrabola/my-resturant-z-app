
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import AboutUs from './Container/AboutUs/AboutUs';
import Header from './Container/Header/Header';
import SpecialMenu from './Container/Menu/SpecialMenu';
import Chef from "./Container/Chef/Chef";
import Intro from './Container/Introduction/Intro';
function App() {
  return (
    <div className="App">
      <Navbar />
  <Header /> 
  <AboutUs />
  <SpecialMenu />
  <Chef />
  <Intro />
  
      <div>Zahra Olanrewaju</div>
    </div>
  );
}

export default App;
