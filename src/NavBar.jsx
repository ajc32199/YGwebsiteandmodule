import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return <nav className='nav'>
        <a href='/' className="site-title">MEMBER MODULE</a>
        <ul>
            <li>
                <a href="/members">Members</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}