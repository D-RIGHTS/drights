import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Hero from './hero/Hero'
import Latest from './Latest/Latest'

function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Latest />
            <Contact />
        </div>
    )
}

export default HomePage;
