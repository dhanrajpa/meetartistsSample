import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link ,BrowserRouter} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const close1=()=>setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Meet Artist
            <i class='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                
              </Link> 
            </li> */}

             <li className='nav-item'>
              <Link
                to='/home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

             {/* <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                AboutUs
              </Link>
            </li>   */}

            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/sign-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SignIN
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SignUp
              </Link>
            </li>
           
            {/* <li>
              <BrowserRouter>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                 onClick={closeMobileMenu}
              >
                SignUp
              </Link>
              </BrowserRouter>
            </li>
            <BrowserRouter>
            <li>
              <Link
                to='/sign-in'
               className='nav-links-mobile1'
               onClick={closeMobileMenu}
              >
                SignIN
              </Link>
             
            </li>
            </BrowserRouter> */}
          </ul>
            
          {/* {button && <Button buttonStyle='btn--outline'>SignUp</Button>} */}
          {/* {button && <Button buttonStyle='btn--outline'>SignIn</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
