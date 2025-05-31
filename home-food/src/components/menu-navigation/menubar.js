import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menubar.scss';
import logo from '../../assets/logo.gif';
import { FaUserPlus, FaShoppingCart } from 'react-icons/fa';


function CustomNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo} 
            alt="Foodie animated logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#order">Order</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* Register Icon */}
            <Nav.Link href="#register" className="icon-link">
              <FaUserPlus /> <span className="d-none d-lg-inline">Register</span>
            </Nav.Link>

            {/* Cart Icon */}
            <Nav.Link href="#cart" className="icon-link">
              <FaShoppingCart /> <span className="d-none d-lg-inline">Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
