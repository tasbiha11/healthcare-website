import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Nav.css';
import logo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Navbars = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <a href="/home"><img src={logo} alt="logo" /></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Link className="active">Home</Link> */}
                        <Nav.Link as={Link} to="/home" className='active'>Home</Nav.Link>
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
                        {/* <Link href="#home">Contact Us</Link> */}
                        <Nav.Link as={Link} to="/contact" className='active'>Contact us</Nav.Link>
                        <Nav.Link href="#home"> <FontAwesomeIcon icon={faSearch} /></Nav.Link>
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={faPhone} className="phone" />
                            (+01) 44885693213</Nav.Link>
                        <Nav.Link href="#home"><button>Contact us <span><BsFillArrowRightSquareFill /></span> </button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars