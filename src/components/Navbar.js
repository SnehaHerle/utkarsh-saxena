import React from 'react'

const Navbar = () => {
    return (
        <nav style={{position:"fixed"}}>
            <div className="nav-wrapper #c62828 red darken-3">
                <a  className="brand-logo left" href="/#" style={{fontSize:"20px"}}>Utkarsh Saxena</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/story">Story</a></li>
                    <li><a href="/inspiration">Inspiration</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar