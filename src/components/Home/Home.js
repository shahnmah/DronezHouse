import React from 'react';
import './Home.css'
import droneImg from '../../assets/drone.png'
import Reviews from '../Reviews/Reviews';
import useReviews from '../../hooks/useReviews'
import { Link } from 'react-router-dom';
import AllReviews from '../AllReviews/AllReviews';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='container'>
            <div className="home">
                <div className='row py-5'>
                    <div className="col-lg-6 col-md-7 col-sm-6 col-12">
                        <h1 className='display-3 fw-bold'>Capture Your Moments</h1>
                        <h3>With Dronez Spark 2</h3>
                        <p className='py-4'>
                            Warp time and space for stunning 8K footage without complex post-processing, With a 1/2-inch CMOS sensor
                        </p>
                        <button className='button fw-bold'>Watch Demo</button>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-6 col-12">
                        <img className='img-fluid' src={droneImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="reviews text-center my-5">
                <h2 className='display-5 fw-bold'>What Our Customer Say</h2>
                <div className="row">

                    {
                        reviews.slice(0, 3).map(review => <Reviews review={review}></Reviews>)
                    }
                </div>
                <button className='button fw-bold'>See More</button>
            </div>

        </div>
    );
};

export default Home;