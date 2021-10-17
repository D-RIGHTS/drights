import React from 'react';
import './styles.css';

function About() {
    return (
        <div className="d-flex flex-column justify-content-between">

           <div></div>
           <div className="d-flex flex-column align-items-center textFlow">
                <h1>About Us</h1>
                <div className="m-5">
                   drights is an upcoming website building company that will focus on the clients needs.
                   Our website is currently hard coded but in the near future this will change.
                   We are based in Zaporozhye, Ukraine. drights was founded by Dumisani Rodrick Ndhlovu
                   in late 2021. We intend on also focusing on the creation of mobile applications but for now we will
                   this is still in our TO-DO list of items to consider in the future/ Our Websites are responsive and also support mobile optimazation.
                </div>
           </div>
           <div></div>

        </div>
    )
}

export default About;
