import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Image src='https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80'
                        style={{ height: '30px', marginRight: '5px' }}
                        rounded
                    ></Image>


                    <Navbar.Brand> <Link to='/'>Learnopedia</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='me-2 btn btn-primary' to="/courses"> Courses</Link>
                            <Link className='me-2 btn btn-primary' to="/blog">Blog</Link>
                            <Link className='me-2 btn btn-primary' to="*">FAQ</Link>
                            <Button variant="outline-dark">Dark Mode</Button>{' '}
                        </Nav>
                        <Nav>
                            <Nav.Link href="">
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '30px' }}
                                            rounded src={user?.photoURL}>
                                        </Image>
                                        : <FaUserAlt></FaUserAlt>}

                            </Nav.Link>
                            <Nav.Link eventKey={2} href="">
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user.displayName} </span>
                                            <Button onClick={handleLogOut} variant="outline-dark">Logout</Button>{' '}
                                        </>
                                        :
                                        <>
                                            <Link to='/login'><Button variant="outline-dark">Login
                                            </Button>{' '}</Link>
                                            <Link to='/register'><Button variant="outline-dark">Register</Button>{' '}</Link>
                                        </>
                                }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;