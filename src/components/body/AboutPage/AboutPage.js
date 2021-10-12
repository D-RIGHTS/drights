import React from 'react'
import SecOne from './SecOne';
import SecThree from './SecThree';
import SecTWo from './SecTWo';

function AboutPage() {
    return (
        <div>
        <div className="blogger">
            <h4>About Us</h4>
            <p>
                This section allow you to read posts posted by other user. Throw your own posts as well. 
            </p>
        </div>
        <div>
            <SecOne /> 
            <SecTWo />
            <SecThree />
        </div>
    </div>
    )
}

export default AboutPage;
