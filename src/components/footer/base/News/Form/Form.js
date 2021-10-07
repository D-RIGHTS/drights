import React from 'react';
import '../../../../footer/styles.css';

function Form() {
    return (
        <div>
           <form className="form-group">
               <input type="email" className="form-control" placeholder="Enter your email" />
               <br />
               <button type="submit" className="btn btnStyles">Send me</button>
           </form>
           <small className="emailT">* Please note - we do not spam your email</small>
        </div>
    )
}

export default Form;
