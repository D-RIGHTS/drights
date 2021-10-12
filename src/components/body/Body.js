import React from 'react'
import BlogPage from './BlogPage/BlogPage';
import HomePage from './HomePage/HomePage';
import {  Route } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage';
import AuthorsPage from './AuthorsPage/AuthorsPage';
import ContactPage from './ContactPage/ContactPage';

function Body() {
    return (
        <div>
            <Route path="/home" component={HomePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/about_us" component={AboutPage} />
            <Route path="/authors" component={AuthorsPage} />
            <Route path="/contact_us" component={ContactPage} />
        </div>
    )
}

export default Body;
