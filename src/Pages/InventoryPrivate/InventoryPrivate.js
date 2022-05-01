import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryPrivate.css';
import { GrDeliver } from 'react-icons/gr';
import { Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const InventoryPrivate = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])

    // console.log(detail);

    // console.log(quantity);

    const handleDeliver = () => {
        let deliver = 1;
        let quantity = detail.quantity - deliver;
        let updatedQuantity = { quantity };
        // console.log(updatedQuantity);
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
    }

    const newStock = event => {
        event.preventDefault();
        let stocks = event.target.number.value;
        let stocksReal = parseInt(stocks);

        let quantity1 = detail.quantity;
        let quantity2 = parseInt(quantity1);
        let quantity = stocksReal + quantity2;

        let againUpdateQuantity = { quantity }
        // console.log(quantity );

        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(againUpdateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
            })
    }

    return (

        <section className='container mt-3'>
            {/* <h1 className='text-center text-primary mb-5'>Inventory Page</h1> */}
            <h3 className='text-center fw-bolder text-success'>Product's Detail and Management</h3> <hr />
            <div className='handleSection mt-5'>
                <div>
                    <img src={detail.img} className='imgRespo' alt="" />
                </div>
                <div className='w-50 handleforRespo border p-3'>
                    <h3 className='text-center'>{detail.name}</h3>
                    <p>{detail.description}</p>
                    <span className='fw-bold'>Price: <span className='text-danger'>${detail.price}</span></span> <br />
                    <span className='fw-bold'>Quantity: <span className='text-danger'>{detail.quantity}</span></span> <br />
                    <span>Supplier-Name: {detail.supplierName}</span>
                    <p className='text-primary'>ID: {detail._id}</p>
                    <div className='text-center mt-3'>
                        <Button variant="outline-primary" onClick={() => handleDeliver()} className='border-0 rounded-pill pt-2 pb-2 mb-2'><span className='pe-2'><GrDeliver></GrDeliver> </span> <span className='pe-3 fw-bold'>Delivery</span></Button>
                        <div className='mt-2 mb-2 d-inline'>
                            <form onSubmit={newStock}>
                                <input type="text" name='number' className=' border border-end-0 border-primary ps-2' placeholder='put here stock number' required />
                                <input type="submit" value="Restock" className='bg-primary text-light border-0 rounded ps-2 pe-2 pt-1 pb-1' />
                            </form>
                            <Link to='/manageinventoreis' className='text-decoration-none fw-bold fst-italic'>Manage Inventories <BsArrowRight></BsArrowRight></Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InventoryPrivate;