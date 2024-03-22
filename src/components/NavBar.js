import React from 'react';
import MenuButton from './MenuButton';

export default function NavBar(){
    return(
        <>
            <nav className='nav-bar'>
                <h3>Jonathan.Dev</h3>

                <MenuButton></MenuButton>
                <ul className="nav-links">
                    <a className="active" href="#home-section">Home</a>
                    <a href="#about-section">About</a>
                    <a href="#skills-section">Skills</a>
                    <a href="#project-section">Projects</a>
                    <a href="#contact-section">Contact</a>
                </ul>
            </nav>
        </>
    )
}