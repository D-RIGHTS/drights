import React from 'react'

function Form() {
    return (
        <div>
           <form>
               <input type="email" placeholder="Enter your email" />
               <button type="submit" className="btn">Send me</button>
           </form>
           <small>* Please note - we do not spam your email</small>
        </div>
    )
}

export default Form;
