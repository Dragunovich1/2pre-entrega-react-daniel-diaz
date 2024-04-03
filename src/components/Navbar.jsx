import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Importamos los componentes de Navbar de Bootstrap
import { NavLink } from 'react-router-dom';

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
      <Navbar.Brand to="" as={NavLink}>Retro Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link to="/category/Consolas" as={NavLink}>Consolas</Nav.Link>
              <Nav.Link to="/category/Accesorios" as={NavLink}>Accesorios</Nav.Link>
              <Nav.Link to="/category/Merchandising" as={NavLink}>Merchandising</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="badge bg-primary">3</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
