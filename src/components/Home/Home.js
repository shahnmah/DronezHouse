import React from 'react';
import './Home.css'
import droneImg from '../../assets/drone.png'

const Home = () => {
    return (
        <div className="container">
            <div className='row'>
            <div className="col-lg-6 col-md-7 col-sm-6 col-12">
                <h1>DZH Spark 2</h1>
                <h3>Imaging Above Everything</h3>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-6 col-12">
                <img className='img-fluid' src={droneImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Home;