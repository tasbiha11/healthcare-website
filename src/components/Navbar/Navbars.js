import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Nav.css';
import logo from '../../Assets/logo.png'

const Navbars = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={logo} title="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="active">Home</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Login/Register</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Service Detail</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Contact Us</Nav.Link>
                        <Nav.Link href="#home">search</Nav.Link>
                        <Nav.Link href="#home">icon + 01780311229</Nav.Link>
                        <Nav.Link href="#home"><button>Contact us <span>&gt;</span> </button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars