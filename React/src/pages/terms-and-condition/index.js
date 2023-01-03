import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { AboutHeader, AboutHero, AboutHeroText, BgImage} from './AboutElements'
import HeroImage from '../../images/abouthero.png'


const TermsAndConditions = () => {
  return (
    <div> <Navbar/>
    <AboutHero>
      <BgImage>
      <img src={HeroImage} alt=''/>
      </BgImage>
      <AboutHeader>Learn About Our Terms And Condition</AboutHeader>
      <AboutHeroText>HOME - Terms And Condition</AboutHeroText>
    </AboutHero>
    <Footer/>
    </div>
  )
}

export default TermsAndConditions