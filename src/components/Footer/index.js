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
                <p>
                Unlock the best logistic experience for your individual and commercial goals using our secured and flexible payment platform, and earn free tokens as  reward.
                </p>
            </ColumnOneText>
        </FooterColumnOne>

        <FooterColumnTwo>
            <ColumnTwoHeading>Quick Links</ColumnTwoHeading>
            <ColumnTwoLinks>
            <li>Home</li>
            <li>About us</li>
            <li>FAQs</li>
            <li>Contact us</li>
            <li>Request Quote</li>
            </ColumnTwoLinks>
        </FooterColumnTwo>

        <FooterColumnThree>
            <ColumnThreeHeading>Follow our Handles</ColumnThreeHeading>
            <ColumnThreeIcons>
            <BsFacebook/>
            <AiFillTwitterCircle/>
            <AiFillInstagram/>
            <AiFillLinkedin/>
            </ColumnThreeIcons>
        </FooterColumnThree>

        <FooterColumnFour>
            <ColumnFourText>
            Join our 10,000 users making the most of Yourrider’s web and mobile app
            </ColumnFourText>
            <ColumnFourLogo>
                <Logoitem1/>
                <Logoitem2/>
               
            </ColumnFourLogo>
        </FooterColumnFour>
    </FooterContainer>
  )
}

export default Footer