import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems';
import Manageinventorypro from './Manageinventorypro';
import './ManageInventories.css';
import Footer from '../../Footer/Footer';

const ManageInventories = () => {
    const [items, setItems] = UseItems();
    let serial = 1;

    let deleteui = id => {
        let remaining = items.filter(item => item._id !== id);
        // console.log(items.filter(item => item._id));
        setItems(remaining);
    }
    return (
        <>
            <div className='container mb-5'>
                <h2 className='text-center text-primary mt-3'>Manage Inventories</h2>
                <hr className='mb-4' />
                <div className='handleFlex'>
                    <div className='w-100'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Serial</th>
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
                    <div className="shadow-lg p-3 mb-5 bg-body rounded w-25 h-25 ms-5 forRespoWidth">
                        <h5>Want to add new item?</h5>
                        <Link to='/addnew' className='text-decoration-none'>Then click here</Link>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default ManageInventories;