import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const InventoryPro = ({ item }) => {
    const [expand, disExpand] = useState(false);
    const navigate = useNavigate();
    const { name, img, description, price, quantity, supplierName, _id } = item;

    const gotoCheckout = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '22rem' }} className='shadow p-3 mb-5 bg-body rounded'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>
                            {!expand && description.slice(0, 90) + '...'} {!expand && <button className='bg-light border-0 text-primary fst-italic fw-bold p-0' onClick={() => disExpand(true)}>Read more</button>}
                            {expand && description} {expand && <button className='bg-light border-0 text-primary fst-italic fw-bold p-0' onClick={() => disExpand(false)}>Read less</button>}
                        </p>
                        <span className='fw-bold'><span className='text-danger'>Price:</span> ${price}</span> <br />
                        <span className='fw-bold'><span className='text-danger'>Quantity:</span> {quantity}</span>
                        <p className='text-muted fw-bolder'><small>Supplier Name: {supplierName}</small></p>
                    </Card.Text>
                    <Button variant="primary" onClick={() => gotoCheckout(_id)} className='ms-5 ps-5 pe-5 pt-2 pb-2'>Stock Update</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default InventoryPro;