import React, { useEffect, useState } from 'react';

const UseItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-mountain-77766.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return [items, setItems]
};

export default UseItems;