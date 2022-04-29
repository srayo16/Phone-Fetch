import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {


    const onsublogin = event =>{
        event.preventDefault();
    }

    return (
        <div className='container'>
            <h1 className='text-center text-primary mt-3 mb-5'>Please log in</h1>
            <div className='mx-auto handlewidth'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-1'>
                    Submit
                </Button>
            </Form>
            <p className='mt-2'>Dont't have any account? <Link className='text-decoration-none' to='/signup'>create one</Link> </p>
            </div>
        </div>
    );
};

export default Login;