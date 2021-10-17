import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Headquarter from './Headquater/Headquarter';
import Info from './Info/Info';
import News from './News/News';

function Base () {
    return (
        <Row className="d-flex justify-content-between">
            <Col lg={4}>
                <Headquarter />
            </Col>
            <Col lg={4}>
                <Info />
            </Col>
            <Col lg={4}>
                <News />
            </Col>
        </Row>
    )
};

export default Base;