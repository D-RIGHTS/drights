import React from 'react';

function Navigation () {
    return (
        <div>
            <div className="navbar sticky-top navbar-light bg-light d-flex justify-content-between p-3">
                <div>D-Rights</div>
                <ul className="d-flex">
                    <li className="px-4">Home</li>
                    <li className="px-4">Blog</li>
                    <li className="px-4">About Us</li>
                    <li className="px-4">Authors</li>
                    <li className="px-4">Contact Us</li>
                </ul>

            </div>
        </div>
    )
};

export default Navigation;