import React from 'react';
import '../../../footer/styles.css'

function Headquarter() {
    return (
       <div>
            <div>
                <h4>Headquarter</h4>
                <p className="textColor">25 Borodinsky Ave</p>
                <p className="textColor">Zaporozhye, Ukraine</p>
            </div>
            
            <div className="d-flex">
                <div className="fabColor">
                    <i class="fab fa-facebook-square"></i>
                </div>
                <div className="fabColor">
                    <i class="fab fa-twitter"></i>
                </div>
                <div className="fabColor">
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
            <div>
            <p className="textColor pt-3">Copyright &copy; 2020 drights</p>
            <p className="textColor">Designed by: Dumisani Rodrick Ndhlovu</p>
            </div>
       </div> 
    )
}

export default Headquarter;
