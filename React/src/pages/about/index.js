import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { AboutHeader, AboutHero, AboutHeroText, AboutSection, AboutusHeader, AboutusText, BgImage, Line, MemberImage, MemberName, Members, MemberTitle, MissionHeader, MissionSection, MissionText, TeamHeader, TeamMembers, TeamSection, ValueBoxContainer, ValueBoxes, ValueElipse, ValueHeader, ValueIcons, ValueSection, ValueSubject, ValueText } from './AboutElements'
import HeroImage from '../../images/abouthero.png'
import Lineimg from '../../images/line.png'
import Secured from '../../images/SecuredDelivery.png'
import Transparent from '../../images/Open-trans.png'
import Flexible from '../../images/flexible-supportive.png'
import Luke from '../../images/Luke-Olawale.jpg'
import Sophia from '../../images/Sophia-Alabi.jpg'
import Peter from '../../images/Peter-Danjuma.jpg'

const About = () => {
  return (
    <>
    <Navbar/>
    <AboutHero>
      <BgImage>
      <img src={HeroImage} alt=''/>
      </BgImage>
      <AboutHeader>Our Vision</AboutHeader>
      <AboutHeroText>Supporting and building businesses by providing exceptional logistic services, and leveraging strategic partnerships to become the leading-edge service provider globally.</AboutHeroText>
    </AboutHero>
    <MissionSection>
      <MissionHeader>Our Mission</MissionHeader>
      <MissionText>Business Fulfilment for Everyone!!!
      </MissionText>
    </MissionSection>
    <AboutSection>
      <AboutusHeader>About Us</AboutusHeader>
      <Line>
        <img src={Lineimg} alt=''/>
      </Line>
      <AboutusText>Yourrider Limited is a company that leverages technology to improve and optimise Logistic services globally. We provide a secured and efficient means for businesses to boost their productivity by making available systems and structure that ensures business growth and customers retainership. </AboutusText>
    </AboutSection>
    <ValueSection>
      <ValueHeader>Our core values</ValueHeader>
      <ValueBoxContainer>
        <ValueBoxes>
          <ValueElipse>
            <ValueIcons>
            <img src={Secured} alt=''/>
            </ValueIcons>
          </ValueElipse>
          <ValueSubject>Safe and Secure</ValueSubject>
          <ValueText>We provide a stable environment for all your deliveries to be handled carefully using our professional riders and drivers</ValueText>
        </ValueBoxes>

        <ValueBoxes>
          <ValueElipse>
            <ValueIcons>
            <img src={Transparent} alt=''/>
            </ValueIcons>
          </ValueElipse>
          <ValueSubject>Open and Transparent</ValueSubject>
          <ValueText>We run a very open and transparent system that gives our users more reasons to trust us with their logistic services</ValueText>
        </ValueBoxes>
        
        <ValueBoxes>

          <ValueElipse>
            <ValueIcons>
              <img src={Flexible} alt=''/>
            </ValueIcons>
          </ValueElipse>
          <ValueSubject>Flexible and Supportive</ValueSubject>
          <ValueText>As a service provider in the supply chain and logistic sector, we provide a flexible platform that is affordable, timely and well-suited for your brand.</ValueText>
        </ValueBoxes>
      </ValueBoxContainer>
    </ValueSection>

    <TeamSection>
      <TeamHeader>Meet the Team</TeamHeader>
      <TeamMembers>
        <Members>
          <MemberImage>
            <img src={Luke} alt='' style={{height:`396px`, weight:`345px`}}/>
          </MemberImage>
          <MemberName>Luke Olawale</MemberName>
          <MemberTitle>Co-Founder & Chief Operation Manager</MemberTitle>
        </Members>

        <Members>
          <MemberImage>
            <img src={Sophia} alt='' style={{height:`396px`, weight:`345px`}}/>
          </MemberImage>
          <MemberName>Sophia Alabi</MemberName>
          <MemberTitle>Product Manager</MemberTitle>
        </Members>

        <Members>
          <MemberImage>
            <img src={Peter} alt='' style={{height:`396px`, weight:`345px`}}/>
          </MemberImage>
          <MemberName>Peter Danjuma</MemberName>
          <MemberTitle>Chief Logistics Tech Support</MemberTitle>
        </Members>
      </TeamMembers>
    </TeamSection>
    <Footer/>
    </>
  )
}

export default About