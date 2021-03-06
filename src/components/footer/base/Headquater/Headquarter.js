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
                <a href="https://www.facebook.com/dumisani.r.ndhlovu" target="_blank" rel="noreferrer" className="fbColor">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/dumisani-rodrick-ndhlovu/" target="_blank" rel="noreferrer" className="LdColor">
                <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inColor">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div>
            <p className="textColor pt-3">Copyright &copy; 2020 drights</p>
            <p className="textColor">Designed by: Dumisani Rodrick Ndhlovu</p>
            </div>
       </div> 
    )
}

export default Headquarter;
