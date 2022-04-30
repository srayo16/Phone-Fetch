import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryPrivate.css';

const InventoryPrivate = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])

    return (

        <section className='container mt-3'>
            {/* <h1 className='text-center text-primary mb-5'>Inventory Page</h1> */}
            <h3 className='text-center fw-bolder text-success'>Product's Detail and Management</h3> <hr />
            <div className='handleSection mt-5'>
                <div>
                    <img src={detail.img} alt=""  />
                </div>
                <div className='w-50 border p-3'>
                    <h3 className='text-center'>{detail.name}</h3>
                    <p>{detail.description}</p>
                    <span className='fw-bold'>Price: <span className='text-danger'>{detail.price}</span></span> <br />
                    <span className='fw-bold'>Quantity: <span className='text-danger'>{detail.quantity}</span></span>
                    <p>Supplier-Name: {detail.supplierName}</p>
                    <button>Delivered</button>
                </div>
            </div>
        </section>
    );
};

export default InventoryPrivate;