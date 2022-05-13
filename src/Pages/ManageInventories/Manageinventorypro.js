import React from 'react';
import UseItems from '../../Hooks/UseItems';

const Manageinventorypro = ({ item, serial, deleteUi }) => {
    // const [items , setItems] = UseItems();
    const { name, img, quantity, _id } = item;

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

    const alertkoro = () => {
        let process = window.confirm('Are you sure to delete this product?');

        if (process) {
            alert('Delete button is temporary disabled by Srayo for security purpose');
        }
    }
    return (
        <>
            <tbody>
                <tr>
                    <td>{serial}</td>
                    <td> <img src={img} className='img-fluid' width={'70px'} alt="" /> </td>
                    <td>{name}</td>
                    <td>{quantity}</td>

                    {/* <td><button className='border-0 mt-2 text-danger fw-bold rounded' disabled onClick={() => deleteItem(_id)}>Delete</button></td> */}

                    <td><button className='border-0 mt-2 text-danger fw-bold rounded' onClick={() => alertkoro()}>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default Manageinventorypro;