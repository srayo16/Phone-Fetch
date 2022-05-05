import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOutHobe = () => {

        signOut(auth).then(() => {

            toast('Log out successful')

        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <div  className='sticky-top'>
            <Navbar bg="dark" expand="lg" style={{height: '70px'}} variant="dark" className='bg-dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>Phone-Fetch <FcSmartphoneTablet></FcSmartphoneTablet></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex  align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <CustomLink className='me-3' to="/home">Home</CustomLink>
                            <CustomLink className='me-3' to="/blogs">Blogs</CustomLink>

                            {user && <CustomLink className='me-3' to="/myitems">My Items</CustomLink>}
                            {user && <CustomLink className='me-3' to="/manageinventoreis">Manage Inventories</CustomLink>}
                            {user && <CustomLink className='me-3' to="/addnew">Add One</CustomLink>}

                            {
                                user ? <button className='bg-dark  border-0 p-0 me-3' style={{ color: 'orange' }} onClick={() => logOutHobe()}>Log out</button> : <CustomLink className='me-3' to="/login">Log In</CustomLink>
                            }



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
            <ToastContainer />
        </div>
    );
};

export default Header;