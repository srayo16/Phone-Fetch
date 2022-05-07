import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Myitemspro = ({ item, deleteUi }) => {
    const [expand, disExpand] = useState(false);
    const navigate = useNavigate();
    const { name, img, description, price, quantity, supplierName, _id } = item;

    const gotoCheckout = id => {
        navigate(`/inventory/${id}`);
    }

    const deleteItem = (id) => {

        const procced = window.confirm('Are you sure to delete this?');

        if (procced) {
            const url = `https://peaceful-mountain-77766.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {

                        deleteUi(id)
                    }
                })
        }
    }

    return (

        <div className='col'>
            <Card style={{ width: '21rem' }}>
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
                    <Button variant="primary" onClick={() => gotoCheckout(_id)} className='ms-5 mb-3 ps-5 pe-5 pt-2 pb-2'>Stock Update</Button>
                    <Button variant="danger" onClick={() => deleteItem(_id)} style={{ marginLeft: '75px' }} className='ps-5 pe-5 pt-2 pb-2'>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Myitemspro;