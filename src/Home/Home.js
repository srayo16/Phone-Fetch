import React from 'react';
import ForimageSection from '../ForimageSection/ForimageSection';
import Inventory from '../Pages/Inventory/Inventory';
import Footer from '../Pages/Shared/Footer/Footer';
import Reviewpart from '../Reviewpart/Reviewpart';


const Home = () => {
    return (
        <>
            <ForimageSection></ForimageSection>
            <Inventory></Inventory>
            <Reviewpart></Reviewpart>
            <Footer></Footer>
        </>
    );
};

export default Home;