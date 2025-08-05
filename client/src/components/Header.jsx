import '../styles/header.css';
import nmdpraLogo from '../images/nmdpra-logo.png';
import Reactimport, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleToggle() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="header">
           
            <nav className='navbar'>
                <div className="header-logo">
                    <div>
                        <img  className="header--logo-image" src={nmdpraLogo} alt="NMDPRA LOGO"/>
                    </div>
                    <h2>NMDPRA AKURE</h2>
                </div>

                <button className='hamburger' onClick={handleToggle}>☰</button>

                <ul className={`nav-links ${ menuOpen ? 'active' : '' }`}>
                    
                    <li><a href="https://roms.nmdpra.gov.ng" target='blank'>Home</a></li>
                    <li><a href="https://www.nmdpra.gov.ng/AboutUs" target='blank'>About</a></li>
                    <li className="dropdown">
                        <a href="" target='blank'>Staff Tool Kit ▾</a>
                        <ul className="dropdown-menu">
                            <li><a href="">File Management</a></li>
                            <hr />
                            <li><a href="">Memo Generator</a></li>
                            <hr />
                            <li><a href="">Journey Management</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="https://www.nmdpra.gov.ng/DownstreamGuidelines" target='blank'>Resources ▾</a>
                        <ul className="dropdown-menu">
                            <li><a href="https://www.nmdpra.gov.ng/MidstreamGuidelines" target='blank'>Midstream Guidelines</a></li>
                            <hr />
                            <li><a href="https://www.nmdpra.gov.ng/DownstreamGuidelines" target='blank'>Downstream Guidelines</a></li>
                        </ul> 
                    </li>
                </ul>
            </nav>
        </header>
    );  
}