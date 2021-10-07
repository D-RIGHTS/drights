import React from 'react';
import './styles.css';
import p1 from './p1.jpg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';

function Latest() {
    return (
        <div className="bgDiv">
            <div></div>
            <div className=" m-5">
                <div className="text-center pt-3">
                    <h2 >Latest Blog posts</h2>
                    <p>Lorem</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p1})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline ">
                                <i class="fas fa-user pr-1"></i>
                                <p>Dumisani Ndhlovu</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>05/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-eye pr-1"></i>
                                <p>150</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">Reading about computer science and how to become a React Developer</h4> 
                            <div className="p-4">
                            <button className="btn Lbtn">Read More</button>
                            </div>
                        </div>
                    </div>


                    <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p2})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline ">
                                <i class="fas fa-user pr-1"></i>
                                <p>Noma Sibanda</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>01/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-eye pr-1"></i>
                                <p>99</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">Following your trail till dawn, saying no to fear of any kind</h4> 
                            <div className="p-4">
                            <button className="btn Lbtn">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p2})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline ">
                                <i class="fas fa-user pr-1"></i>
                                <p>Alisa Jameson</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>26/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-eye pr-1"></i>
                                <p>129</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">How to be the best in your field, and minding your business</h4> 
                            <div className="p-4">
                            <button className="btn Lbtn">Read More</button>
                            </div>
                        </div>
                    </div>



                    {/* <div>
                   
                        <div className="bgImg" style={{backgroundImage: `url(${p3})`}}>
                        <div className="comps">
                              <div className="d-flex align-items-baseline ">
                                <i class="fas fa-user pr-1"></i>
                                <p>Alisa Jameson</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>26/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-eye pr-1"></i>
                                <p>190</p>
                              </div>
                          </div> 
                        </div>
                        <h4>Lorem ipsum</h4>
                        <button>Read More</button>
                    </div> */}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Latest;
