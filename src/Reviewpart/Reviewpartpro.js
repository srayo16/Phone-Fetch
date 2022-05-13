import React from 'react';
import { Card } from 'react-bootstrap';

const Reviewpartpro = ({ reviewOne }) => {

    const { name, img, review, star } = reviewOne;

    return (
        <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <Card border="light" style={{ width: '22rem', height: '300px' }} className='shadow p-3 mb-5 bg-body rounded mx-auto'>
                <Card.Header className='mx-auto'> <img src={img} className='img-fluid' alt="" /> </Card.Header>
                <Card.Body>
                    <Card.Title className='text-center fw-bolder text-success'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        {review} <br />
                        Rating: {star}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reviewpartpro;