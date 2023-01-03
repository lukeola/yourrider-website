import React, { useRef} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Nav, NavLogo, NavLink, NavMenu,  NavBtnLink,  NavBtn} from "./NavbarElements";
import LogoWhite from '../../images/yourrider-logo-white.png'
import './navbar.css'



const Navbar = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    
    return (
        <>
            <Nav  ref={navRef}>
                <NavLogo>
                    <NavLink to="/" activestyle='true'><img src="https://lukeshubstorage.blob.core.windows.net/images/yourriderlogo-blue.png" alt="logo" /></NavLink>
                </NavLogo>
                

                
                <NavMenu>
                    <NavLink to="/" activestyle='true'>
                        Home
                    </NavLink>

                    <NavLink to="/about" activestyle='true'>
                        About us
                    </NavLink>

                    <NavLink to="/faqs" activestyle='true'>
                        FAQs
                    </NavLink>

                    <NavLink to="/contact" activestyle='true'>
                        Contact us
                    </NavLink>

                    <NavLink to="/quote" activestyle='true'>
                        Request Quote
                    </NavLink>
                    

                <button  className='nav-btn nav-close-btn' onClick={showNavBar}>
                <NavLogo style={{alignItems:'center',  justifyContent:'center', left:'0',width:'100%', position:'fixed'}}>
                    <NavLink to="/" activestyle='true'><img src="https://lukeshubstorage.blob.core.windows.net/images/yourriderlogo-blue.png" alt="logo" /></NavLink>
                </NavLogo>

                <FaTimes/>
                </button>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="https://portal.yourrider.com/register" activestyle='true' style={{textDecoration:'none', color:'white'}}>
                    Login
                    </NavBtnLink> 
                </NavBtn> 

            </Nav>
               
               
            <div className='nav-btn' style={{position:'fixed', flexDirection:'row', width:'100%', height:'5%',zIndex:'100',background:'rgba(0, 0, 128, 0.74)'}}>
            
            <NavLogo style={{left:'0', background:'transparent',zIndex:'110'}}>
                    <NavLink to="/" activestyle='true'><img src={LogoWhite}alt="logo" /></NavLink>
            </NavLogo>
            <button   onClick={showNavBar}  style={{right:'0',position:'fixed', flexDirection:'row', padding:'15px',outline:'none',border:'none',background:'transparent', color:'#fff'}} >
                <FaBars />
            </button>
            </div>
        </>
  );
};

export default Navbar;
