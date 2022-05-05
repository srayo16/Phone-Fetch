import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Shared/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinners from '../Spinners';
import Social from '../Social/Social';
import { async } from '@firebase/util';
import Footer from '../../Footer/Footer';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, error3] = useSendEmailVerification(auth);

    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    let errorMessage;
    if (error || error2 || error3) {
        errorMessage = <p className='text-danger fw-bold'>{error?.message} {error2?.message} {error3?.message} </p>
    }

    if (loading || sending || updating) {
        return <Spinners></Spinners>
    }

    //form er submit issue arrow funtion
    const subsignupForm = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await sendEmailVerification();
            await updateProfile({ displayName: name });
            toast('Sign up successful');
            toast('Sent email');
            navigate('/home')
            localStorage.setItem('userName', name);
            localStorage.setItem('userAddress', address);
            localStorage.setItem('userNumber', number);
            event.target.reset();
        }

        else if (password !== confirmPassword) {
            alert("password don't match");
        }
    }

    return (
        <>
            <div className='container mb-5'>

                <h1 className='text-center text-primary mt-3 mb-3'>Please Sign up</h1>

                <div className='mx-auto handlewidth'>

                    <Form onSubmit={subsignupForm}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name='name' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" name='address' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone Number" name='number' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' required />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" style={{ color: agree ? 'green' : 'red' }} onClick={() => setAgree(!agree)} label="Agreed to our terms and policy" />
                        </Form.Group>
                        <Button disabled={!agree} variant="primary" className='ps-4 pe-4 pt-2 pb-2 rounded-pill' type="submit">
                            Sign up
                        </Button>
                    </Form>
                    {errorMessage}
                    <p className='mt-2'>Already have an account? <Link className='text-decoration-none' to='/login'>please log in</Link> </p>
                    <ToastContainer />
                </div>
                <Social></Social>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Signup;