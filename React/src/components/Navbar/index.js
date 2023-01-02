import React, {useState} from "react";
import {FaBars} from 'react-icons/fa';
import { Nav, NavLogo, NavLink, NavMenu,  MobileIcon, NavBtnLink,  NavBtn} from "./NavbarElements";
import './navbar.css'



const Navbar = ({toggle}) => {

    //change the navbar color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 95) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll',changeColor)
    return (
        <>
            <Nav className={color ? 'header header-bg' : 'header'}>
                <NavLogo to="/home">
                    <img src="https://lukeshubstorage.blob.core.windows.net/images/yourriderlogo-blue.png" alt="logo" />
                </NavLogo>
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                
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

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/login" activestyle='true'>
                        Login
                    </NavBtnLink>

                </NavBtn>
            </Nav>
        </>
  );
};

export default Navbar;
