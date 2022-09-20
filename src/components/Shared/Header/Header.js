import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-nav sticky-top'>
            <div className="container nav-container">
                <NavLink to="/" className="navbar-brand"><h3 className='fw-bold'>Altaf</h3></NavLink>
                {/* <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed"><i  className="fa-2x fa-solid fa-bars"></i></button> */}

                <div className='right-nav'>
                    <ul style={{marginBottom:'none'}} className='d-flex '>
                        <li><NavLink className='cool-link' to="/">Home</NavLink></li>
                        <li><NavLink className='cool-link' to="/about">About</NavLink></li>
                        <li><NavLink className='cool-link' to="skill">Skill</NavLink></li>
                        <li><NavLink className='cool-link' to="exprience">Exprience</NavLink></li>
                        <li><NavLink className='cool-link' to="projects">Projects</NavLink></li>
                        <li><NavLink className='cool-link' to="resume">Resume</NavLink></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;