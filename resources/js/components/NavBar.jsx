import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
            <a href="/auth/line">LINE Login</a>
            <a href="/auth/google">Google Login</a>
            <NavLink to="/posts">Posts</NavLink>
        </div>
    );
}

export default NavBar;