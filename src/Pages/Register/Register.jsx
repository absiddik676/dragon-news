/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { AuthContexApi } from '../../AuthContext/Provider';

const Register = () => {
    const { createAccount, updateUserProfile } = useContext(AuthContexApi)
    const [accepted,setAccepted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(userName, password, email);
        createAccount(email, password)
            .then(result => {
                console.log(result);
                updateUserProfile(userName)
                    .then(() => {
                    })
                    .catch((error => {
                        console.log(error);
                    }))
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handelAccepted = e =>{
        setAccepted(e.target.checked);
    }
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3 className="text-center mb-4">Register</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter username" name='username' />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" required placeholder="Enter email" name='email' />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required placeholder="Password" name='password' />
                                </Form.Group>
                                <Form.Group className="mb-2 mt-3" controlId="formBasicCheckbox">
                                    <Form.Check onClick={handelAccepted} type="checkbox" label="Accept Terms and condition" />
                                </Form.Group>


                                <Button disabled={!accepted} variant="primary" type="submit" className="w-100 mt-3">
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;