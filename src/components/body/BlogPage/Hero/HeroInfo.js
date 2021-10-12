import React from 'react';
import '../../BlogPage/styles.css'
import p1 from '../../../body/HomePage/Latest/p1.jpg';
import p2 from '../../../body/HomePage/Latest/p2.jpeg';
import p3 from '../../../body/HomePage/Latest/p3.jpeg';

function HeroInfo() {
  const ReadMore = () => {
    alert('Page coming soon')
  }
  
    return (
        <div className="bgDiver">
            <div></div>
            <div className=" p-3">
               
                <div className="conts">
                    <div className="py-2">
                    <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p1})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-user pr-1"></i>
                                <p>Dumisani Ndhlovu</p>
                              </div>
                              <div className="d-flex align-items-baseline">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>05/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-eye pr-1"></i>
                                <p>150</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">Reading about computer science and how to become a React Developer</h4> 
                            <div className="p-4">
                              <button 
                                className="btn Lbtn"
                                onClick={ReadMore}
                                >Read More
                              </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    
                   <div className="py-2">
                   <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p2})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-user pr-1"></i>
                                <p>Noma Sibanda</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>01/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-eye pr-1"></i>
                                <p>99</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">Following your trail till dawn, saying no to fear of any kind! Strength is key</h4> 
                            <div className="p-4">
                              <button 
                                className="btn Lbtn"
                                onClick={ReadMore}
                                >Read More
                              </button>
                            </div>
                        </div>
                    </div>
                   </div>

                    <div className="py-2">

                    <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p2})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-user pr-1"></i>
                                <p>Noma Sibanda</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>01/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-eye pr-1"></i>
                                <p>99</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">Who says the palate does not count? Read more to find out</h4> 
                            <div className="p-4">
                              <button 
                                className="btn Lbtn"
                                onClick={ReadMore}
                                >Read More
                              </button>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="py-2">
                    <div className="blogContainer">
                        <div className="bgImg" style={{backgroundImage: `url(${p3})`}}>
                          <div className="comps">
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-user pr-1"></i>
                                <p>Alisa Jameson</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-calendar pr-1"></i>
                                <p>26/06/21</p>
                              </div>
                              <div className="d-flex align-items-baseline px-2">
                                <i class="fas fa-eye pr-1"></i>
                                <p>129</p>
                              </div>
                          </div>  
                        </div>
                        <div className="text-center">
                            <h4 className="p-4">How to be the best in your field, and minding your business</h4> 
                            <div className="p-4">
                              <button 
                                className="btn Lbtn"
                                onClick={ReadMore}
                                >Read More
                              </button>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default HeroInfo;
