import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContexApi } from '../../AuthContext/Provider';

const Login = () => {
    const {logIng} = useContext(AuthContexApi)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname
    console.log(location.state.from.pathname);
    const handleSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password,email);
        logIng(email,password)
        .then(result=>{
            console.log(result);
            navigate(from,{replace:true})
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6} lg={4}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h3 className="text-center mb-4">Login</h3>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control name='email' type="text" placeholder="Enter username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name='password' type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 mt-3">
                                        Login
                                    </Button>
                                </Form>
                                <div className="text-center mt-3">
                                    <a href="#">Forgot password?</a>
                                </div>
                                <p className='text-center'>Dont’t Have An Account ? <Link className='text-danger' to='/register'>Register</Link></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Login;