import React from 'react';
import './Review.css'
const Review = ({review}) => {
    const {name, customer_review, img, rating} = review
    return (
        
<div className='col-lg-4 col-md-4 col-sm-6 col-12 review p-4'>
            <img src={img} alt="" />
            <h5 className='py-1'>{name}</h5>
            <h6>{rating} Stars</h6>
            <p>{customer_review}</p>
        
        </div>
    );
};

export default Review;