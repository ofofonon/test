import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion,AnimatePresence } from "framer-motion"

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = React.useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = React.useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }else{
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  // animations
  const item = {
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:'easeInOut',
        duration:0.3,
        delay:.9
      }
    }
  }

    return(
      <div className='fixedNav'>
        <div className='tablet-desktop'>
          <div  className='navContent '>
            <img src="images/ph.png" alt="" className='navImg'/>
            <Nav className="fon" activeKey="/home">      
                <Nav.Item>
                    <Nav.Link href="/home" className='navfont'>Home</Nav.Link>
                </Nav.Item > 
                  <NavDropdown title="Gallery" className='navfont' id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Male</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Female</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Children</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4" className=''>contact us</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className='navfont'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className='navfont'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3" className='border navfont'>
                    Buy Now
                  </Nav.Link>
                </Nav.Item>
              
            </Nav>
          </div>
        </div>
        <div className='mobile'>
          <div className=''>
          <nav className='mobileNav'>
            <div className='burger-menu' onClick={updateMenu}>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
            </div>
          </nav>
          <img src="images/ph.png" alt="" className='logo'/>
          <div className={menu_class}>
            
            <Nav className="justify-content-center mt-5 shadow" activeKey="/home">
            
              <nav className='navContent'>
              
                <Nav.Item>
                    <Nav.Link href="/home"  className='border-bottom border-top navfont'>Home</Nav.Link>
                </Nav.Item > 
                <NavDropdown title="Gallery" id="nav-dropdown" className='border-bottom navfont'>
                  <NavDropdown.Item eventKey="4.1">Male</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Female</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Children</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4" className='border-bottom'>contact us</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className='border-bottom navfont'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className='border-bottom navfont'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3" className='border-bottom navfont'>
                    Buy Now
                  </Nav.Link>
                </Nav.Item>
              </nav>
            </Nav>

          </div>
          </div>
        </div>
    </div>
    );
    
  }

export default Navbar;
  