import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviewpart.css';
import { BsArrowRight } from 'react-icons/bs';
import Reviewpartpro from './Reviewpartpro';

const Reviewpart = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container overflow-hidden mb-5'>
            <h2 className='text-primary text-center mb-5 fw-bolder pt-3'>Warehouse Client's Reviews</h2>
            <div className='row gx-5 gy-5'>

                {
                    reviews.map(reviewOne => <Reviewpartpro key={reviewOne._id} reviewOne={reviewOne}></Reviewpartpro>)
                }

            </div>
            <div className='text-end me-5 mb-5'>
                <Link to='/manageinventoreis' className='text-decoration-none fw-bold fst-italic fs-5z'>See All <BsArrowRight></BsArrowRight></Link>
            </div>
        </div>
    );
};

export default Reviewpart;