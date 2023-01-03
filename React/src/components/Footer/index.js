import React from 'react'
import { ColumnFourLogo, ColumnFourText, ColumnOneLogo, ColumnOneText, ColumnThreeHeading, ColumnThreeIcons, ColumnTwoHeading, ColumnTwoLinks, FooterColumnFour, FooterColumnOne, FooterColumnThree, FooterColumnTwo, FooterContainer, Logoitem1, Logoitem2 } from './FooterElements'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <FooterContainer>
        <FooterColumnOne>
            <ColumnOneLogo>
            <img src="https://lukeshubstorage.blob.core.windows.net/images/Yourrider-Logo-white.png" alt="logo" />
            </ColumnOneLogo>
            <ColumnOneText>
                Unlock the best logistic experience for your individual and commercial goals using our secured and flexible payment platform, and earn free tokens as  reward.
            </ColumnOneText>
        </FooterColumnOne>

        <FooterColumnTwo>

            <ColumnTwoHeading>Quick Links</ColumnTwoHeading>
          
            <ColumnTwoLinks>Home</ColumnTwoLinks>
            <ColumnTwoLinks>About us</ColumnTwoLinks>
            <ColumnTwoLinks>FAQs</ColumnTwoLinks>
            <ColumnTwoLinks>Contact us</ColumnTwoLinks>
            <ColumnTwoLinks>Request Quote</ColumnTwoLinks>

        </FooterColumnTwo>

        <FooterColumnThree>
            <ColumnThreeHeading>Follow our Handles</ColumnThreeHeading>
            <ColumnThreeIcons>
            <a href='https://facebook.com/yourriderltd' style={{textDecoration:'none', color:'white'}}><BsFacebook/> </a>
            <a href='https://twitter.com/yourriderltd' style={{textDecoration:'none', color:'white'}}><AiFillTwitterCircle/> </a>
            <a href='https://www.instagram.com/yourrider.co/' style={{textDecoration:'none', color:'white'}}><AiFillInstagram/> </a>
            <a href='https://www.linkedin.com/company/your-rider-limited' style={{textDecoration:'none', color:'white'}}><AiFillLinkedin/> </a>
            </ColumnThreeIcons>
        </FooterColumnThree>

        <FooterColumnFour>
            <ColumnFourText>
            Join our 10,000 users making the most of Yourrider’s web and mobile app
            </ColumnFourText>
            <ColumnFourLogo>
                <a href='https://play.google.com/store/apps/developer?id=YourRider+Limited'><Logoitem1 /></a>
                <a href='https://apps.apple.com/us/app/yourrider/id1579639564#?platform=iphone'><Logoitem2/> </a>
               
            </ColumnFourLogo>
        </FooterColumnFour>
    </FooterContainer>
  )
}

export default Footer