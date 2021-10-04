import React from 'react';
import contact from './contact.jpg';
import Form from './Form/Form';
import './styles.css';

function Contact() {
    return (
        <div className="bg-primary d-flex justify-content-between conta">
            <div>
                <div>
                    <h1>Contact us</h1>
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
