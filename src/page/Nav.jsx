import React from 'react'
import './Nav.css'
import logo from '../img/logo.png'
import { CiGlobe } from "react-icons/ci";

const Nav = () => {
    return (
        <>
            <div className='nav'>
                <div className='img'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='navigation'>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Our Stores</li>
                        <li>Pricing Plans</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>
                            <span>{<CiGlobe />}</span>
                        </li>
                        <li>
                            <button>Get Start</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav
