import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
            localStorage.removeItem('userName');
            localStorage.removeItem('userAddress');
            localStorage.removeItem('userNumber');

        }).catch((error) => {
            // An error happened.
            console.error(error.message);
        });

    }
    return (
        <>
            <Navbar bg="dark" className='sticky-top' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='fs-4'>Phone-Fetch <FcSmartphoneTablet></FcSmartphoneTablet></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex  align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <CustomLink className='me-3' to="/home">Home</CustomLink>
                            <CustomLink className='me-3' to="/blogs">Blogs</CustomLink>

                            {
                                user ? '' : <CustomLink className='me-3' to="/login">Log In</CustomLink>
                            }

                            {user &&
                                <NavDropdown title="Profiles" id="navbarScrollingDropdown">

                                    <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/myitems">My Items</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageinventoreis">Manage Inventories</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addnew">Add One</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/allreview">Reviews</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <div className='text-center'>
                                        <button className=' bg-light text-danger fw-bolder border-0 p-0' onClick={() => logOutHobe()}>Log out</button>
                                    </div>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer />
        </>
    );
};

export default Header;