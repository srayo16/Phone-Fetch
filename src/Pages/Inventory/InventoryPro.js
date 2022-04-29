import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const InventoryPro = ({ item }) => {
    const [expand, disExpand] = useState(false);

    const { name, img, description, price, quantity, supplierName } = item;

    return (
        <div className='col'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>
                          {!expand && description.slice(0,100) + '...'} {!expand && <button onClick={()=> disExpand(true) }>Read more</button> }
                          {expand && description} {expand && <button onClick={() => disExpand(false)}>Read less</button>}
                        </p>
                        <span>{price}</span>
                        <p>{quantity}</p>
                        <span>{supplierName}</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryPro;