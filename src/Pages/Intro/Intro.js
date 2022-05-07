import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import intro from './../../images/intro.jpg';
import intro1 from './../../images/intro1.jpg';
import './Intro.css';

const Intro = () => {
    const navigate = useNavigate();
    const navigatetoManage = ()=>{
        navigate('/manageinventoreis')
    }

    return (
        <section className='homePage container mb-3 pb-5 overflow hidden '>
            <div className='captionPrt pb-5 '>
                <h1 className='text-success'>Best Android Collection</h1>
                <h1 className='text-success'>For 2022</h1>
                <hr />
                <p className='pt-2'>There are new phones arriving all the time, especially when it comes to the world of Android. Apple's iPhones will always be popular but handsets running Google's mobile OS provide you with a wealth of choice - and usually much better specs for the same price.</p>
                    <Button variant="primary" onClick={() => navigatetoManage()} className='ps-3 pe-3 pt-2 pb-2 '>Manage All</Button>
            </div>
            <div className='w-100'>
                <img className='img-fluid' src= {intro1} alt="" />
            </div>
        </section>
    );
};

export default Intro;