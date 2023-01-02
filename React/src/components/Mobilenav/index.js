import React from 'react'
import { MobilenavContainer,
    Icon,
     CloseIcon, 
     MobileBtnWrap,
     MobilenavLink, 
     MobilenavRoute, 
     MobilenavWrapper, 
     MobilenavMenu } from './MobilenavElements.js'
const MobileNav = ({isOpen, toggle}) => {
  return (
    <MobilenavContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <MobilenavWrapper>
            <MobilenavMenu>
                <MobilenavLink to="about" onClick={toggle}>
                    About us
                </MobilenavLink>
                <MobilenavLink to="faqs" onClick={toggle}>
                    FAQs
                </MobilenavLink>
                <MobilenavLink to="project" onClick={toggle}>
                    Contact us
                </MobilenavLink>
                <MobilenavLink to="project" onClick={toggle}>
                    Request Quote   
                </MobilenavLink>
                
            </MobilenavMenu>
            
            <MobileBtnWrap>
                <MobilenavRoute to="join">Login</MobilenavRoute>

            </MobileBtnWrap>
            
            
        </MobilenavWrapper>
    </MobilenavContainer>
    
  )
}

export default MobileNav