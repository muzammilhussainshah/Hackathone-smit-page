import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img src="https://www.saylaniwelfareusa.com/static/media/logo_saylaniwelfareusa.22bf709605809177256c.png" alt="Logo" className="logo" style={{ width: '200px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Books
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#book-details">Book Details</Nav.Link>
          </Nav>

       {/* Buttons */}
       <div className="buttons">
            <button className="btn" style={{ backgroundColor: '#0b5ed7', marginRight: '10px',color:'white' }}>Donate Now</button>
            <button className="btn" style={{ backgroundColor: '#8dc63f',color:'white' }}>Be a Sponsor</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
