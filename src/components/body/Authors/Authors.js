import React from 'react';
import m1 from '../Authors/m1.jpg';
import m2 from '../Authors/m2.jpg';
import m3 from '../Authors/m2.jpg';
import './styles.css'

function Authors() {
    return (
        <div>
            <div className="blogger">
                <h4>Team</h4>
                <p>
                    Get acquainted with the team that made drights a success
                </p>
            </div>
            <div className="d-flex justify-content-between">
            <div className="p-5 authContainer">
                <div>
                    <img className="imgAuthor" src={m1} alt="" />
                </div>
                
                <div>
                    <br />
                    <p>Dumisani Rodrick Ndhlovu</p>
                    <p>CEO and Developer</p>
                </div>
                <div className="d-flex">
                    <div className="authFab">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className="p-5 authContainer">
                <img className="imgAuthor" src={m2} alt="" />
                
                <div>
                    <br />
                    <p>Alina Ndhlovu</p>
                    <p>Content Manager</p>
                </div>
                <div className="d-flex">
                    <div className="authFab">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className="p-5 authContainer">
                <img className="imgAuthor" src={m2} alt="" />
                
                <div>
                    <br />
                    <p>Alina Ndhlovu</p>
                    <p>Content Manager</p>
                </div>
                <div className="d-flex">
                    <div className="authFab">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className="p-5 authContainer">
                <div className="imgContainer">
                    <img className="imgAuthor" src={m2} alt="" />
                </div>
                
                <div>
                    <br />
                    <p>Amanda James</p>
                    <p>CEO</p>
                </div>
                <div className="d-flex">
                    <div className="authFab">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="authFab">
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default Authors
