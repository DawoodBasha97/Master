// src/components/CustomNavbar.js
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menubar.scss';
import logo from '../../assets/logo.gif';
import { Link} from 'react-router-dom';

function CustomNavbar() {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="Foodie animated logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/order">Order</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/register">
                <FaUserPlus /> <span className="d-none d-lg-inline">Register</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="icon-link">
                <FaShoppingCart /> <span className="d-none d-lg-inline">Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;