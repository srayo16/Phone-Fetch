import React from 'react';
import ForimageSection from '../ForimageSection/ForimageSection';
import Inventory from '../Pages/Inventory/Inventory';
import Footer from '../Pages/Shared/Footer/Footer';


const Home = () => {
    return (
        <>
            <ForimageSection></ForimageSection>
            <Inventory></Inventory>
            <Footer></Footer>
        </>
    );
};

export default Home;