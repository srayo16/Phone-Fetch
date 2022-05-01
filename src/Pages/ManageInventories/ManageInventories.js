import React from 'react';
import { Table } from 'react-bootstrap';
import UseItems from '../../Hooks/UseItems';
import Manageinventorypro from './Manageinventorypro';

const ManageInventories = () => {
    const [items , setItems] = UseItems();
    let serial = 1;

    let deleteui = id =>{
        let remaining = items.filter(item => item._id !== id);
        // console.log(items.filter(item => item._id));
        setItems(remaining);
    }
    return (
        <div className='container'>
            <h3 className='text-center text-primary mt-3'>Manage Inventories</h3>
            <hr className='mb-4' />
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {
                    items.map(item => <Manageinventorypro key={item._id} deleteui={deleteui} item={item} serial={serial++}></Manageinventorypro>)
                }

            </Table>
        </div>
    );
};

export default ManageInventories;