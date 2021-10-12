import React from 'react';
import imager from '../AboutPage/k1.jpg'
import './styles.css'

function SecOne() {
    return (
        <div className="d-flex justify-content-between cOne">
            <div className="txta">
                <div className="myInfo">
                    <h4>D-RIGHTS</h4>
                    <p>
                        The first question ever asked was, 'Who or what is D-RIGHTS'?
                    </p>
                    <p>
                        It is a name that <em>Dumisani Rodrick Ndhlovu</em> stumbled upon in his teen age while playing GT-3.
                        There was a car which always won and it was Labelled D-Rights and since his first name also started with D,
                        and the second name R, D-Rights has been his favored stage name. 
                    </p>
                    <p>
                        Our purpose is to build the online community one website at a time
                    </p>
                </div>
            </div>
            <div >
                <img className="imgHandling" src={imager} alt="" />
            </div>
        </div>
    )
}

export default SecOne
