import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryPro from './InventoryPro';
import { BsArrowRight } from 'react-icons/bs';
import UseItems from '../../Hooks/UseItems';

const Inventory = () => {

    const [items] = UseItems();

    return (

        <div className='container overflow-hidden' id='inventory'>
            <h1 className='text-primary text-center fw-bolder mt-5 mb-5 pt-3'>Inventory Stock Items</h1>
            <div className='row gx-5 gy-5'>
                {
                    items.slice(0,6).map(item => <InventoryPro key={item._id} item={item}></InventoryPro>)
                }
            </div>
           <div className='text-center mt-4 mb-5'>
           <Link to='/manageinventoreis' className='text-decoration-none fw-bold fst-italic'>Manage Inventories <BsArrowRight></BsArrowRight></Link>
           </div>
        </div>
    );
};

export default Inventory;