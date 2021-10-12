import React from 'react'

function HeroForm() {
    return (
        <div className="px-1">
            <br />
            <h4>Blog Search</h4>
            <br />
            <nav class="navbar navbar-light bg-light sart">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search for ..." aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                </form>
            </nav>
            <br />
            <h5>The Blog page with relevant info</h5>
            <br />
            <p>The modern-day computer has become an important part of our daily life.</p>
            <p>Nowadays, they use the computer in every office whether private or government</p>
            <p>Mankind is using computers for over many decades now. Also, they are used in many fields like agriculture, designing, machinery making, defense and many more</p>
        </div>
    )
}

export default HeroForm;
