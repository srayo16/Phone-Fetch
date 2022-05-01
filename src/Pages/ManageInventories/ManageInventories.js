import React from 'react';
import UseItems from '../../Hooks/UseItems';

const ManageInventories = () => {
    const [items] = UseItems();
    return (
        <div>
            <h1>manage inventory: {items.length}</h1>
        </div>
    );
};

export default ManageInventories;