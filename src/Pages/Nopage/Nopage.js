import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Nopage = () => {

    return (
        <>
            <div className='container mt-5 fw-bolder text-danger text-center' style={{ height: '600px' }}>

                <h1 className='mb-3'>Not found any other Webpages</h1>
                <h3 className='mb-3'>404</h3>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Nopage;