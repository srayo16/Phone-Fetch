import React from 'react';
import UseItems from '../../Hooks/UseItems';

const Manageinventorypro = ({ item, serial, deleteui }) => {
    // const [items , setItems] = UseItems();
    const { name, img, description, price, quantity, supplierName, _id } = item;

    const deleteItem = (id) => {

        const procced = window.confirm('Are you sure to delete this?');

        if (procced) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {

                        deleteui(id)
                    }
                })
        }
    }
    return (
        <>
            <tbody>
                <tr>
                    <td>{serial}</td>
                    <td> <img src={img} className='img-fluid' width={'50px'} alt="" /> </td>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td><button onClick={() => deleteItem(_id)}>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default Manageinventorypro;