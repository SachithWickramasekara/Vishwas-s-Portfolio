//.\assets\togologo.png
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src=".\assets\togologo.png" alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link  to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link>    
                    </li>
                    <li className='nav-item'>
                    <Link  to="contactus" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar