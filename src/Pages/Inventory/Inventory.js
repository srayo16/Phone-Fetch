import React, { useEffect, useState } from 'react';
import InventoryPro from './InventoryPro';

const Inventory = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (

        <div className='container overflow-hidden'>
            <h1 className='text-primary text-center fw-bolder mt-5 mb-5 pt-3'>Inventory Stock Items</h1>
            <div className='row gx-5 gy-5'>
                {
                    items.map(item => <InventoryPro key={item._id} item={item}></InventoryPro>)
                }
            </div>
        </div>
    );
};

export default Inventory;