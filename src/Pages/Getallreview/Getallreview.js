import React from 'react';
import Usereview from '../../Hooks/Usereview';
import Footer from '../Shared/Footer/Footer';
import Spinners from '../Spinners';
import Getallreviewpro from './Getallreviewpro';

const Getallreview = () => {

    const [reviews] = Usereview();
    if (reviews.length <= 0) {
        return <Spinners></Spinners>
    }

    return (
        <>
            <div className='container'>
                <h2 className='text-success text-center fw-bolder mt-3 pt-3'>All reviews</h2> <hr className=' mb-5' />
                <div className='row gx-5 gy-5'>

                    {
                        reviews.map(reviewPerson => <Getallreviewpro key={reviewPerson._id} reviewPerson={reviewPerson}></Getallreviewpro>)
                    }

                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Getallreview;