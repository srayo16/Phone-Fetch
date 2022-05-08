import React from 'react';
import Inventory from '../Inventory/Inventory';
import Reviewpart from '../../Reviewpart/Reviewpart';
import Intro from '../Intro/Intro';
import Onlyimage from '../Onlyimage/Onlyimage';
import ForimageSection from '../ForimageSection/ForimageSection';


const Home = () => {
    return (
        <>
            <ForimageSection></ForimageSection>
            <Intro></Intro>
            <Inventory></Inventory>
            <Reviewpart></Reviewpart>
            <Onlyimage></Onlyimage>
        </>
    );
};

export default Home;