import React from 'react';
import './styles.css';
import background from './evening.webp';

function Hero () {
    return (
        <div className="d-flex align-items-center"> 
            
            <div className="heroStyles p-2 " style={{backgroundImage: `url(${background})`}}>
                <div className="infor">
                    <h1 className="pb-4"> Computer is an electronic device  </h1>
                    <div>
                    A computer is an electronic device which can perform many tasks like messaging, calculations, data storage, printing, etc. Computers were developed in the 1940s. These days 
                    computers are used everywhere—homes, schools, colleges, offices, hotels, railway stations, airports, shops, etc.
                    </div>
                    <button className="btn ">
                        Read more
                    </button>
                </div>
            </div>
            
        </div>
    )
};

export default Hero;