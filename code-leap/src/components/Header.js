import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {

  return (
    <header>
      <Navbar id="nav" expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand id="nav-brand" as="h5">CodeLeap Network</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;