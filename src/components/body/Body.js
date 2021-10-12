import React from 'react'
import BlogPage from './BlogPage/BlogPage';
import HomePage from './HomePage/HomePage';
import {  Route } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage';
import Authors from './Authors/Authors';

function Body() {
    return (
        <div>
            <Route path="/home" component={HomePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/about_us" component={AboutPage} />
            <Route path="/authors" component={Authors} />
        </div>
    )
}

export default Body;
