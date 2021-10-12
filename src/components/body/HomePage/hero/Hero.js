import React from 'react';
import './styles.css';

function Hero () {
    const ReadMore = () => {
        alert('Page coming soon')
    }
    return (
        <div className="d-flex align-items-center"> 
            
            <div className="heroStyles p-5 " >
                <div></div>
                <div className="infor">
                    <h1 className="">Computers, the most sophisticated electronic devices</h1>
                    <div className="py-5">
                    A computer is an electronic device which can perform many tasks like messaging, calculations, data storage, printing, etc. Computers were developed in the 1940s. These days 
                    computers are used everywhere—homes, schools, colleges, offices, hotels, railway stations, airports, shops, etc.
                    </div> 
                    <button 
                    className="btn btnStyles"
                    onClick={ReadMore}
                    >
                        Read more
                    </button>
                </div>
                <div></div>
            </div>
            
        </div>
    )
};

export default Hero;