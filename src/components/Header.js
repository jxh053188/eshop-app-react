import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="secondary" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>My Shop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/cart">
                  <Nav.Link href="/cart">
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link href="/login">
                    <i className="fa-solid fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
