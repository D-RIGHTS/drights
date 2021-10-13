import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

function Form() {
    return (
            <form>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Enter full name" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <textarea type="text" className="form-control" rows="6" id="" placeholder="Tell us about your experience" />
                    </div>
                </div>
                
                
                <div className="form-group row">
                    <div className="col-sm-10">
                        <Button type="submit" className="btn btnStyle">Send Message</Button>
                    </div>
                </div>
            </form>
    )
}

export default Form;
