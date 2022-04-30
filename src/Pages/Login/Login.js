import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Shared/Firebase.init';
import Social from '../Social/Social';
import Spinners from '../Spinners';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();

    let location = useLocation();

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    const mail = useRef('');

    let errorMessage;
    if (error || error2) {
        errorMessage = <p className='text-danger fw-bold'>{error?.message} {error2?.message}</p>
    }

    if (loading || sending) {
        return <Spinners></Spinners>
    }

    //log form issue arrow funtion
    const onsublogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    //reset pass function

    const resetPass = async () => {
        const email = mail.current.value;;

        if (email && !error2) {
            await sendPasswordResetEmail(email);
            toast('Sent email');

        }
        else {
            alert('Email field empty!');
        }


    }
    return (
        <div className='container'>
            <h1 className='text-center text-primary mt-3 mb-5'>Please log in</h1>
            <div className='mx-auto handlewidth mb-5'>
                <Form onSubmit={onsublogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={mail} name='email' required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-1'>
                        Log in
                    </Button>
                </Form>

                {errorMessage}

                <button onClick={() => resetPass()} className=' text-decoration-none border-0 bg-light mt-2 ps-0 text-primary'><span className='text-dark'>Forgot password?</span> Reset Password</button>

                <p className='mt-2'>Dont't have any account? <Link className='text-decoration-none' to='/signup'>create one</Link> </p>
                <ToastContainer />
            </div>
            <Social></Social>
        </div>
    );
};

export default Login;