import React from 'react';
import '../../../footer/styles.css';

function Info() {
    return (
        <div>
        <div>
            <h4>Contact Info</h4>
            <p className="textColor">+380 90 191 0670</p>
            <div className="emailT">
            <a href="mailto:rodrickd2020@gmail.com"
            >rodrickd2020@gmail.com</a>
            </div>
        </div>

        <div>
            <h4>Quick Links</h4>
            <ul className="linkers">
                <li className="emailT px-1">
                    <a href="home">Home</a>
                </li>
                <li className="emailT px-1">
                    <a href="aboutUs">About Us</a>
                </li>
                <li className="emailT px-1">
                    <a href="terms">Terms & Conditions</a>
                </li>
                <li className="emailT px-1">
                    <a href="contactUs">Contact Us</a>
                </li>
            
            </ul>
        </div>

        
   </div> 
    )
}

export default Info;
