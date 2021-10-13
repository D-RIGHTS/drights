import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

function Navigation() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about_us" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="authors" className="nav-link">Authors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact_us" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link to="home" className="logo">drights</Link>
                </form>
            </div>
        </nav>
    )
};

export default Navigation;