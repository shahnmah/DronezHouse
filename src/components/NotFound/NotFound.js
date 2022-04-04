import React from 'react';
import './NotFound.css'
import img from '../../assets/404.jpg'
const NotFound = () => {
    return (
        <div className='row'>
            <div className="col-12 text-center">
            <img className='w-50' src={img} alt="page not found" />
            </div>
        </div>
    );
};

export default NotFound;