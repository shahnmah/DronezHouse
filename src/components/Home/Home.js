import React from 'react';
import './Home.css'
import droneImg from '../../assets/drone.png'

const Home = () => {
    return (
        <div className="container home">
            <div className='row py-5'>
            <div className="col-lg-6 col-md-7 col-sm-6 col-12">
                <h1 className='display-3 fw-bold'>Capture your Moments</h1>
                <h3>With Dronez Spark 2</h3>
                <p className='py-4'>
                Warp time and space for stunning 8K footage without complex post-processing, With a 1/2-inch CMOS sensor
                </p>
                <button className='demo-button fw-bold'>Watch Demo</button>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-6 col-12">
                <img className='img-fluid' src={droneImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Home;