import React from 'react';
import Headquarter from './Headquater/Headquarter';
import Info from './Info/Info';
import News from './News/News';

function Base () {
    return (
        <div className="d-flex justify-content-between">
            <Headquarter />
            <Info />
            <News />
        </div>
    )
};

export default Base;