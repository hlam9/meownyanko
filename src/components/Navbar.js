import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
    <header className={classes.header}>
        <div className={classes.logo}>Meow..</div>
        <nav className="navbar">
            <div className="classes.container">
                <ul>
                    <li>
                        <Link to="/" className="home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/meowing" className="meowing">
                            Meowing
                        </Link>
                    </li>
                </ul>
                

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar