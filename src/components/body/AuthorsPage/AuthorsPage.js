import React from 'react';
import m1 from '../AuthorsPage/m1.jpg';
import m2 from '../AuthorsPage/m2.jpg';
import m3 from '../AuthorsPage/m3.jpeg';
import m4 from '../AuthorsPage/m4.jpg';
import './styles.css';

function Authors() {

    const theAlert = () => {
        alert('Currently Unavailable')
    }

    const dumi = {
        dumifb: "https://www.facebook.com/dumisani.r.ndhlovu",
        dumiLd: "https://www.linkedin.com/in/dumisani-rodrick-ndhlovu/",
        dumiGit: "https://github.com/D-RIGHTS"
    }

    const alina = {
        alinafb: "https://www.facebook.com/profile.php?id=100003371291161",
        alinaIns: "https://www.instagram.com/alina_ndhlovu/?hl=en",
    }

    const tman = {
        tmanfb: "https://www.facebook.com/thabani.nluv",
        tmanIns: "https://www.instagram.com/thabaninluv/"
    }

    return (
        <div>
            <div className="blogger">
                <h4>Team</h4>
                <p>
                    Get acquainted with the team that made drights a success
                </p>
            </div>
            <div className="mContainer">
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
                        <a href={dumi.dumifb} target="_blank" rel="noreferrer">
                        <i class="fab fa-facebook-square"></i>
                        </a>
                    </div>
                    <div className="authFab">
                    <a href={dumi.dumiLd} target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="authFab">
                    <a href={dumi.dumiGit} target="_blank" rel="noreferrer">
                        <i class="fab fa-github"></i>
                        </a>
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
                    <a href={alina.alinafb} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-square"></i>
                        </a>
                    </div>
                    <div className="authFab">
                        <i className="fab fa-twitter" onClick={theAlert}></i>
                    </div>
                    <div className="authFab">
                    <a href={alina.alinaIns} target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-5 authContainer">
                <img className="imgAuthor" src={m3} alt="" />
                
                <div>
                    <br />
                    <p>Sandile Moyo</p>
                    <p>Content Manager</p>
                </div>
                <div className="d-flex">
                    <div className="authFab">
                        <i className="fab fa-facebook-square" onClick={theAlert}></i>
                    </div>
                    <div className="authFab">
                        <i className="fab fa-twitter" onClick={theAlert}></i>
                    </div>
                    <div className="authFab">
                        <i className="fab fa-instagram" onClick={theAlert}></i>
                    </div>
                </div>
            </div>

            <div className="p-5 authContainer">
                <div className="imgContainer">
                    <img className="imgAuthor" src={m4} alt="" />
                </div>
                
                <div>
                    <br />
                    <p>Thabani Ndhlovu</p>
                    <p>Business Development</p>
                </div>
                <div className="d-flex">
                    <div className="authFab">
                    <a href={tman.tmanfb} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-square"></i>
                        </a>
                    </div>
                    <div className="authFab">
                        <i className="fab fa-twitter" onClick={theAlert}></i>
                    </div>
                    <div className="authFab">
                    <a href={tman.tmanIns} target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default Authors
