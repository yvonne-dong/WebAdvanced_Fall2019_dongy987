import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <div className="menu" id="menu-home">
                    <li>
                        <h2><Link to='/'>Home</Link></h2>
                    </li>
                </div>
                <div className="menu" id="menu-sec1">
                    <li><Link to='/sec1'>
                        <h2>Extended Reality</h2>
                    </Link></li>
                </div>
                <div className="menu" id="menu-sec2">
                    <li><Link to='/sec2'>
                        <h2>Tangible Internet</h2>
                    </Link></li>
                </div>
                <div className="menu" id="menu-sec3">
                    <li><Link to='/sec3'>
                        <h2>Beyond Virtuality</h2>
                    </Link></li>
                </div>
            </ul>
        </nav>
    </header>
)

export default Header

