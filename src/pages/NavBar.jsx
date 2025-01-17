import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const Navbar = () => {
    return (
    <nav>
        <Link to='/'>Website</Link>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/members'>Members</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar;