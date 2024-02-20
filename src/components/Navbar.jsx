import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const buttonColor = isHomePage ? "white" : "black";

    const resumeLink = "https://drive.google.com/file/d/1uPgNRWCV0rx4xaz9y2A4BZyp50KNLmzM/view?usp=drive_link";

    return (
        <header className='header'>
            <NavLink to='/' exact className="nav-link" style={{ color: buttonColor }}>
                HOME
            </NavLink>
            <nav className='flex flex-wrap text-lg gap-2 sm:gap-7 font-medium'>
                <NavLink to='/about' className="nav-link" style={{ color: buttonColor }}>
                    About
                </NavLink>
                <NavLink to='/projects' className="nav-link" style={{ color: buttonColor }}>
                    Projects
                </NavLink>
                <a href={resumeLink} download className="nav-link" style={{ color: buttonColor }}>
                Resume
                </a>
            </nav>
        </header>
    );
};

export default Navbar;