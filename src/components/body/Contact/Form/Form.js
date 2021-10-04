import React from 'react'

function Form() {
    return (
        <div>
            <form className="d-flex flex-column">
                
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="email" placeholder="Enter your email address" />
                <br />
                <input type="text" placeholder="Tell us about your self" />
                <br />
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    )
}

export default Form;
