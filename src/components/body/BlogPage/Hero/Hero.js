import React from 'react';
import '../../BlogPage/styles.css'
import HeroInfo from './HeroInfo';
import HeroForm from './HeroForm';

function Hero() {
    return (
        <div>
            <div className="blogger">
                <h4>Blog posts</h4>
                <p>
                    This section allow you to read posts posted by other user. Throw your own posts as well. 
                </p>
            </div>
            <div className="d-flex justify-content-between containa">
              <HeroInfo />
              <HeroForm />           
            </div>
        </div>
    )
}

export default Hero
