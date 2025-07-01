import {Link} from 'react-router-dom'
import './Header.css'
import { useState } from 'react';
const Header = () =>{
     const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
      const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };
      const closeDrawer = () => {
        setIsDrawerOpen(false);
      };
    return(
        <div className='header1'>
            
        <header className='header'>
            <nav><h2><Link to="/" className='vinav'>Vivekanad College</Link></h2>
             </nav>
            <nav className='dekstop-nav'>
                <Link to="/home" className='nav'>Home</Link>
                <Link to="/about" className='nav'>About</Link>
                <Link to="/contact" className='nav'>Contact</Link>
                <Link to="/admission" className='nav'>Admission</Link>
                <Link to="/courses" className='nav'>Courses</Link>
                <a href='/admission' class="btn">Apply Now!!</a>
                 </nav>
                 {/* Mobile Hamburger Button */}
                       <button className="hamburger-menu" onClick={toggleDrawer}>
                         <span className="hamburger-icon"></span>
                         <span className="hamburger-icon"></span>
                         <span className="hamburger-icon"></span>
                       </button>
                       {/* Mobile Drawer Navigation */}
                       <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                         <button className="close-drawer-btn" onClick={toggleDrawer}>
                           ✕
                         </button>
                         <Link to="/" className="nav-item" onClick={closeDrawer}>
                           Home
                         </Link>
                         <Link to="/about" className="nav-item" onClick={closeDrawer}>
                           About
                         </Link>
                         <Link to="/courses" className="nav-item" onClick={closeDrawer}>
                           Courses
                         </Link>
                         <Link to="/contact" className="nav-item" onClick={closeDrawer}>
                           Contact
                         </Link>
                         <Link to="/admiion"  className="nav-item btn primary-btn" onClick={closeDrawer}>
                           Apply Now!
                         </Link>
                       </nav>
                 
                    
                  
      </header>
        </div>
    )
}

export default Header;