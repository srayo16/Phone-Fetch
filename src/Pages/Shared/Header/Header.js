import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../logo/navLogoOrigin.png';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink';
import { FcSmartphoneTablet } from 'react-icons/fc';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Phone-Fetch<FcSmartphoneTablet></FcSmartphoneTablet></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex  align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <CustomLink className='me-3' to="/home">Home</CustomLink>
                            <Nav.Link className='me-3' href='#inventory' style={{color: 'orange'}}>Inventory</Nav.Link>
                            <CustomLink className='me-3' to="/login">Log In</CustomLink>


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;