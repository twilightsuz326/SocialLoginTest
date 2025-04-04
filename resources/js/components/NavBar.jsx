import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
            <a href="/auth/google">Google Login</a>
            <a href="/auth/twitter">Twitter Login</a>
        </div>
    );
}

export default NavBar;