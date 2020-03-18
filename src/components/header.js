import React from 'react';

import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
    return <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Relleo's Rant</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="d-flex flex-row justify-content-center flex-fill">
        <Nav.Link href="/">
        <Link to="/" className="text-decoration-none">Home</Link>
        </Nav.Link>
        <Nav.Link>Posts</Nav.Link>
      </Nav>
      <Nav inline>
        <Button variant="link" className="mr-2">
          <Link to="/profile" className="text-decoration-none">Profile</Link>
        </Button>
        <Button variant="outline-success">
          <Link to="/login" className="text-decoration-none d-block">SIGN OUT</Link>
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default Header;