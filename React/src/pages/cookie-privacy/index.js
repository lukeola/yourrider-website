import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { AboutHeader, AboutHero, AboutHeroText, BgImage} from './AboutElements'
import HeroImage from '../../images/abouthero.png'

const CookiePrivacy = () => {
  return (
    <div> <Navbar/>
    <AboutHero>
      <BgImage>
      <img src={HeroImage} alt=''/>
      </BgImage>
      <AboutHeader>Know About Our Cookie Policy</AboutHeader>
      <AboutHeroText>HOME - Cookie Policy</AboutHeroText>
    </AboutHero>
    <Footer/>
    </div>
  )
}

export default CookiePrivacy