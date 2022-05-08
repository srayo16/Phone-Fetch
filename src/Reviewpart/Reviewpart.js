import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviewpart.css';
import { BsArrowRight } from 'react-icons/bs';
import Reviewpartpro from './Reviewpartpro';
import Usereview from '../Hooks/Usereview';
import Spinners from '../Pages/Spinners';

const Reviewpart = () => {

    const [reviews] = Usereview();
    
    if (reviews.length <= 0) {
        return <Spinners></Spinners>
    }

    return (
        <div className='container overflow-hidden mb-5'>
            <h2 className='text-primary text-center pb-3 fw-bolder pt-3'>Client's Reviews From Order Site</h2> <hr className='mb-5' />
            <div className='row gx-5 gy-5'>

                {
                    reviews.slice(0, 3).map(reviewOne => <Reviewpartpro key={reviewOne._id} reviewOne={reviewOne}></Reviewpartpro>)
                }

            </div>
            <div className='text-end me-5 mb-2'>
                <Link to='/allreview' className='text-decoration-none fw-bold fst-italic fs-5z'>See All <BsArrowRight></BsArrowRight></Link>
            </div>
        </div>
    );
};

export default Reviewpart;