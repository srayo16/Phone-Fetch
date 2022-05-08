import React from 'react';
import { Link } from 'react-router-dom';
import InventoryPro from './InventoryPro';
import { BsArrowRight } from 'react-icons/bs';
import UseItems from '../../Hooks/UseItems';
import Spinners from '../Spinners';

const Inventory = () => {

    const [items] = UseItems();

    if (items.length <= 0) {
        return <Spinners></Spinners>
    }
    // console.log(items);

    return (

        <div className='container overflow-hidden' id='inventory'>
            <h1 className='text-primary text-center fw-bolder  mb-5 pt-3'>Inventory Stock Items</h1>
            <div className='row gx-5 gy-5'>
                {
                    items.slice(0, 6).map(item => <InventoryPro key={item._id} item={item}></InventoryPro>)
                }
            </div>
            <div className='text-end me-5 mb-5'>
                <Link to='/manageinventoreis' className='text-decoration-none fw-bold fst-italic fs-5z'>Manage Inventories <BsArrowRight></BsArrowRight></Link>
            </div>
        </div>
    );
};

export default Inventory;