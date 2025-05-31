import './App.css';
import CustomNavbar from './components/menu-navigation/menubar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/homepage';
import Dashboard from './pages/dashboard/dashboard';
import Footer from './components/footer/footer';
import RegisterPage from './pages/register/register';


function App() {
  return (
    <div className="App">
      <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
