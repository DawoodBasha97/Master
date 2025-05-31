import logo from './logo.svg';
import './App.css';
import SwiperCarousel from './components/carousal/carousal';
import CustomNavbar from './components/menu-navigation/menubar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CustomNavbar/>
      <SwiperCarousel/>
    </div>
  );
}

export default App;
