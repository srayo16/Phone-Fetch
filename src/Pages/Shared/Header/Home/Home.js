import React from 'react';
import Footer from '../../../../Footer/Footer';
import ForimageSection from '../../../../ForimageSection/ForimageSection';
import Banner from '../../../Banner/Banner';
import Inventory from '../../../Inventory/Inventory';


const Home = () => {
    return (
        <div className=''>
            <ForimageSection></ForimageSection>
            <Inventory></Inventory>
            <Footer></Footer>
        </div>
    );
};

export default Home;