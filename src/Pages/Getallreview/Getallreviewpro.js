import React from 'react';
import { Card } from 'react-bootstrap';

const Getallreviewpro = ({ reviewPerson }) => {

    const { name, img, review, star } = reviewPerson;

    return (
        <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <Card border="light" style={{ width: '22rem', height: '300px' }} className='shadow p-3 mb-5 bg-body rounded mx-auto'>
                <div className='w-50 mx-auto'>
                    <Card.Header className='text-center'> <img src={img} className='img-fluid' alt="" /> </Card.Header>
                </div>
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

export default Getallreviewpro;