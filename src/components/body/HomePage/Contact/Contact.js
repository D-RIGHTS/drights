import React from 'react';
import contact from './contact.jpg';
import Form from './Form/Form';
import { Row, Col } from 'react-bootstrap'
import './styles.css';

function Contact() {
    return (
        <Row className="conta">
            <Col sm={12} lg={6} >
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
            </Col>
            
            <Col lg={6}>
                <div className="imageC">
                    <img className="imgCont" src={contact} alt="Contacts" />
                </div>
            </Col>
        </Row>
    )
}

export default Contact;
