import {Link} from 'react-router-dom'
import './Header.css'
const Header = () =>{
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
                 
                    
                  
      </header>
        </div>
    )
}

export default Header;