import React, { useEffect, useState } from 'react';

const Usereview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'https://peaceful-mountain-77766.herokuapp.com/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews];
};

export default Usereview;