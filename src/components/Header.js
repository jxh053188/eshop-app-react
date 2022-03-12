import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default class Header extends Component {
  render() {
      return (
        <header>
            <Navbar bg="secondary" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">My Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                            <Nav.Link href="/login"><i className="fa-solid fa-user"></i> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
  }
}
