import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navigation() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light lama">
                <Link to="home" className="logo">drights</Link>
                <ul className="d-flex">
                    <li className="">
                        <Link to="home" className="navbar-brand">Home</Link>
                    </li>
                    <li className="">
                        <Link to="blog" className="navbar-brand">Blog</Link>
                    </li>
                        <li className="">
                    <Link to="about_us" className="navbar-brand">About Us</Link>
                    </li>
                        <li className="">
                    <Link to="authors" className="navbar-brand">Authors</Link>
                    </li>
                    <li className="">
                        <Link to="contact_us" className="navbar-brand">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navigation;