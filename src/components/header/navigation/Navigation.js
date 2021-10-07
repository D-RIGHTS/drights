import React from 'react';
import './styles.css';

function Navigation() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light lama">
                <a href="home" className="logo">drights</a>
                <ul className="d-flex">
                    <li className="">
                        <a href="home" className="navbar-brand">Home</a>
                    </li>
                    <li className="">
                        <a href="blog" className="navbar-brand">Blog</a>
                    </li>
                        <li className="">
                    <a href="about_us" className="navbar-brand">About Us</a>
                    </li>
                        <li className="">
                    <a href="authors" className="navbar-brand">Authors</a>
                    </li>
                    <li className="">
                        <a href="contact_us" className="navbar-brand">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navigation;