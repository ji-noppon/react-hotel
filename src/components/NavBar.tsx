import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

const NavBar = (props: Props) => {
  return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="">React-Queue</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/hotel">Hotel</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default NavBar