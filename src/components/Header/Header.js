import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='conatainer row header d-flex align-items-center'>
            <div className="col-lg-4">
            <img src={logo} alt="logo"/>
            </div>
            <div className="col-lg-8">
                <nav className='navigation-bar'>
                    <Link to="/home">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blogs">Blogs</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;