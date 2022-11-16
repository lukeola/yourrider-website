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
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>

                    <NavLink to="/about" activeStyle>
                        About us
                    </NavLink>

                    <NavLink to="/faqs" activeStyle>
                        FAQs
                    </NavLink>

                    <NavLink to="/contact-us" activeStyle>
                        Contact us
                    </NavLink>

                    <NavLink to="/quote" activeStyle>
                        Request Quote
                    </NavLink>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/login" activeStyle>
                        Login
                    </NavBtnLink>

                </NavBtn>
            </Nav>
        </>
  );
};

export default Navbar;
