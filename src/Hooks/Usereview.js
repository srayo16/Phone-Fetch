import React, { useEffect, useState } from 'react';

const Usereview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews];
};

export default Usereview;