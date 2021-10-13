import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../../footer/styles.css';

function Form() {
    return (
        <div>
           <form className="form-group">
               <input type="email" className="form-control" placeholder="Enter your email" />
               <br />
               <Button type="submit" className="btn btnStyles">Send me</Button>
           </form>
           <small className="emailT">* Please note - we do not spam your email</small>
        </div>
    )
}

export default Form;
