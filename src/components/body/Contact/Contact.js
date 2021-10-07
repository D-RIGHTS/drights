import React from 'react';
import contact from './contact.jpg';
import Form from './Form/Form';
import './styles.css';

function Contact() {
    return (
        <div className="conta">
            <div className="formHandle">
                <div >
                    <div>
                    <h2>Contact us</h2>
                    <p>We would love to hear from you!</p>
                    </div>
                    <br />
                    <Form />
                </div>
            </div>
            <div>
                <img src={contact} alt="Contacts" />
            </div>
        </div>
    )
}

export default Contact;
