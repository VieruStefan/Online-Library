import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      const pairs = storedTheme.split(',').reduce((acc, curr, index) => {
        if (index % 2 === 0) {
          acc.push([curr, storedTheme.split(',')[index+1]]);
        }
        return acc;
      }, []);
      pairs.forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
      });
    }
  }, []);
  return (
    <div className="body">
      <Navbar className="navbar-light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
