import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import './AllReviews.css'

const AllReviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='container text-center mt-5'>
           <div className="row">
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
           </div>
        </div>
    );
};

export default AllReviews;