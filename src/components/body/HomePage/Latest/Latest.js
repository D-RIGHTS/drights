import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import p1 from './p1.jpg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';


function Latest() {
  const ReadMore = () => {
    alert('Page coming soon')
  }
  
    return (
        <Row className="bgDiv">
            <div></div>
            <div className=" m-5">
                <div className="text-center pt-3">
                    <h2 >Latest Blog posts</h2>
                    <p>Lorem</p>
                </div>
                <Row className="">
                  <Col lg={4} className="py-3">
                      <div className=" blogContainer">
                            <div className="bgImg" style={{backgroundImage: `url(${p1})`}}>
                              <div className="comps">
                                  <div className="d-flex align-items-baseline px-2">
                                    <i className="fas fa-user pr-1"></i>
                                    <p>Dumisani Ndhlovu</p>
                                  </div>
                                  <div className="d-flex align-items-baseline">
                                    <i className="fas fa-calendar pr-1"></i>
                                    <p>05/06/21</p>
                                  </div>
                                  <div className="d-flex align-items-baseline px-2">
                                    <i className="fas fa-eye pr-1"></i>
                                    <p>150</p>
                                  </div>
                              </div>  
                            </div>
                            <div className="text-center">
                                <h4 className="p-4">Reading about computer science and how to become a React Developer</h4> 
                                <div className="p-4">
                                  <Button 
                                    className="btn Lbtn"
                                    onClick={ReadMore}
                                    >Read More
                                  </Button>
                                </div>
                            </div>
                        </div>
                  </Col>
                  
                  <Col lg={4} className="py-3">
                      <div className="blogContainer">
                            <div className="bgImg" style={{backgroundImage: `url(${p2})`}}>
                              <div className="comps">
                                  <div className="d-flex align-items-baseline px-2">
                                    <i className="fas fa-user pr-1"></i>
                                    <p>Noma Sibanda</p>
                                  </div>
                                  <div className="d-flex align-items-baseline px-2">
                                    <i className="fas fa-calendar pr-1"></i>
                                    <p>01/06/21</p>
                                  </div>
                                  <div className="d-flex align-items-baseline px-2">
                                    <i className="fas fa-eye pr-1"></i>
                                    <p>99</p>
                                  </div>
                              </div>  
                            </div>
                            <div className="text-center">
                                <h4 className="p-4">Following your trail till dawn, saying no to fear of any kind</h4> 
                                <div className="p-4">
                                  <Button 
                                    className="btn Lbtn"
                                    onClick={ReadMore}
                                    >Read More
                                  </Button>
                                </div>
                            </div>
                        </div>
                  </Col>

                  <Col lg={4} className="py-3">
                      <div className="blogContainer">
                          <div className="bgImg" style={{backgroundImage: `url(${p3})`}}>
                            <div className="comps">
                                <div className="d-flex align-items-baseline px-2">
                                  <i className="fas fa-user pr-1"></i>
                                  <p>Alisa Jameson</p>
                                </div>
                                <div className="d-flex align-items-baseline px-2">
                                  <i className="fas fa-calendar pr-1"></i>
                                  <p>26/06/21</p>
                                </div>
                                <div className="d-flex align-items-baseline px-2">
                                  <i className="fas fa-eye pr-1"></i>
                                  <p>129</p>
                                </div>
                            </div>  
                          </div>
                          <div className="text-center">
                              <h4 className="p-4">How to be the best in your field, and minding your business</h4> 
                              <div className="p-4">
                                <Button 
                                  className="btn Lbtn"
                                  onClick={ReadMore}
                                  >Read More
                                </Button>
                              </div>
                          </div>
                      </div> 
                  </Col>
                </Row>
            </div>
            <div></div>
        </Row>
    )
}

export default Latest;
