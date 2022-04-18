import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="white" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className='d-flex mt-1'>
                            <img height='30' src={logo} alt="" />
                            <h4>DentiCare</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/service'>Services</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {
                                user ?
                                    <button className='btn  text-decoration-none' onClick={handleSignOut}>
                                        Sign Out
                                    </button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Log in
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;