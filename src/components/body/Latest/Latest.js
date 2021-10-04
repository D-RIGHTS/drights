import React from 'react';
import './styles.css';
import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';

function Latest() {
    return (
        <div className="bg-secondary">
            <div className="d-flex flex-column">
                <div>
                    <h1>Latest Blog posts</h1>
                    <p>Lorem</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="bgImg" style={{backgroundImage: `url(${p1})`}}>

                        </div>
                        <h4>Lorem ipsum</h4>
                        <button>Read More</button>
                    </div>
                    <div>
                        <div className="bgImg" style={{backgroundImage: `url(${p2})`}}>

                        </div>    
                        <h4>Lorem ipsum</h4>
                        <button>Read More</button>
                    </div>
                    <div>
                        <div className="bgImg" style={{backgroundImage: `url(${p3})`}}>

                        </div>
                        <h4>Lorem ipsum</h4>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest;
