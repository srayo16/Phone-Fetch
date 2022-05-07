import React from 'react';
import ForimageSection from '../../ForimageSection/ForimageSection';
import Inventory from '../Inventory/Inventory';
import Footer from '../Shared/Footer/Footer';
import Reviewpart from '../../Reviewpart/Reviewpart';
import Intro from '../Intro/Intro';


const Home = () => {
    return (
        <>
            <ForimageSection></ForimageSection>
            <Intro></Intro>
            <Inventory></Inventory>
            <Reviewpart></Reviewpart>
            <Footer></Footer>
        </>
    );
};

export default Home;