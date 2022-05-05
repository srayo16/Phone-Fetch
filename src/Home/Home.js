import React from 'react';
import Footer from '../Footer/Footer';
import ForimageSection from '../ForimageSection/ForimageSection';
import Inventory from '../Pages/Inventory/Inventory';


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