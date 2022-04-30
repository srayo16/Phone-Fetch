import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../Shared/Firebase.init';
import Spinners from '../Spinners';
import { FcGoogle } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMess;
    if (loading || loading2 || loading3) {
        return <Spinners></Spinners>
    }
    if (error || error2 || error3) {
        errorMess =
            <div>
                <p className='text-center text-danger'>Error: {error?.message} {error2?.message} {error3?.message}</p>
            </div>

    }
    if (user || user2 || user3) {
        navigate(from, { replace: true });
        toast('Signed up');
    }

    return (
        <div className='container pb-5 mt-3 w-50'>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='pt-3 px-3 fw-bold'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorMess}
            <p className='text-center fw-bold pb-3 pt-2'>To continue, log in to Phone-tech.</p>
            <div className='text-center mt-3'>
                <button className='btn btn-light border border-secondary rounded-pill w-50' onClick={() => signInWithGoogle()}><span className='fs-3'><FcGoogle></FcGoogle></span> <span className='fs-5 text-muted fw-bolder ps-2'>Continue with google</span></button>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-primary border-0 rounded-pill w-50' onClick={() => signInWithFacebook()}><span className='fs-3'><FaFacebook></FaFacebook></span> <span className='fs-5  text-light fw-bolder ps-2'>Continue with facebook</span></button>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-dark border border-secondary rounded-pill w-50' onClick={() => signInWithGithub()}><span className='fs-3'><FaGithub></FaGithub></span> <span className='fs-5 text-lightfw-bolder ps-2'>Continue with github</span></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Social;