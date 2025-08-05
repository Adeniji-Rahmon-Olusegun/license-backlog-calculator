import '../styles/header.css';
import nmdpraLogo from '../images/nmdpra-logo.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img  className="header--logo-image" src={nmdpraLogo} alt="NMDPRA LOGO"/>
                <h2>NMDPRA AKURE</h2>
            </div>
            
            <nav >
                <ul className='header--nav-items'>
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