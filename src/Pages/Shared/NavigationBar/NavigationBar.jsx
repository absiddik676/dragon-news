import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContexApi } from '../../../AuthContext/Provider';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContexApi)
    const singOut  = () =>{
        logOut()
    }
    return (
        <div>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            
                                <Link to='/'>Home</Link>
                            
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'25px'}}/> {user?.displayName }</Nav.Link>
                            <Nav.Link eventKey={2}>
                                {
                                    user ? <Button onClick={singOut} variant="secondary">log out</Button>:<Link to='/login'><Button variant="secondary">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;