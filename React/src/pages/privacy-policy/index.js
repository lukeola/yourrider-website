import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { AboutHeader, AboutHero, AboutHeroText, BgImage, PrivacyHeader, PrivacySection} from './AboutElements'
import HeroImage from '../../images/abouthero.png'


const PrivacyPolicy = () => {
  return (
    <div> <Navbar/>
    <AboutHero>
      <BgImage>
      <img src={HeroImage} alt=''/>
      </BgImage>
      <AboutHeader>Know About Our Privacy Policy</AboutHeader>
      <AboutHeroText>HOME - Privacy Policy</AboutHeroText>
    </AboutHero>

    <PrivacySection>
        <PrivacyHeader>Our Privacy Policy</PrivacyHeader>

        <p  style={{position:'absolute',margin:'5%' }}><span>The Your Rider Mobile Application provides a marketplace where, among other things, persons who seek to deliver goods to certain destinations (“Delivery”) can be matched with transportation options to such destinations. One option for Users of the application is to request a ride from dispatch riders who are driving to or through those destinations (“Riders”). Users and Riders are collectively referred to herein as “Users,” and the driving services provided by Users to Riders shall be referred to herein as “Delivery Services.” As a User, you authorize Your Rider to match you with Riders based on factors such as your location, the requested pickup location, the estimated time to pickup, your destination, User preferences, and Mobile Application efficiency, and to cancel an existing match and/or rematch you with a Rider based on the same considerations. Any decision by a User to offer or accept Delivery Services is a decision made in such User’s sole discretion. Each Delivery Service provided by a Driver to a Rider shall constitute a separate agreement between such persons.</span></p>
    </PrivacySection>
    
    <Footer/>
    </div>
  )
}

export default PrivacyPolicy