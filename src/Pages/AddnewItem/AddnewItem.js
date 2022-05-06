import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddnewItem.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Shared/Footer/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/Firebase.init';

const AddnewItem = () => {
    const [user] = useAuthState(auth);

    const postItem = event => {
        event.preventDefault();

        const email = user.email;
        const name = event.target.name.value;
        const img = event.target.image.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supName.value;
        const description = event.target.descrip.value;

        const items = { email, name, img, description, price, quantity, supplierName }

        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast('Product added successfully');
                event.target.reset();
                // console.log(data);
            })

    }

    return (
        <>
            <div className='container mt-3 mb-5'>

                <h3 className='text-center fw-bolder text-success'>Add a new item</h3> <hr className='mb-4' />

                <div className='mx-auto handleWidth'>

                    <Form onSubmit={postItem}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} required readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product's name" name='name' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Image url" name='image' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" name='descrip' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" name='price' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Quantity" name='quantity' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSupplierName">
                            <Form.Label>SupplierName</Form.Label>
                            <Form.Control type="text" placeholder="SupplierName" name='supName' required />
                        </Form.Group>
                        <Button variant="primary" className='ps-3 pe-3 pt-2 pb-2 mt-2' type="submit">
                            Add Item
                        </Button>

                    </Form>
                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddnewItem;