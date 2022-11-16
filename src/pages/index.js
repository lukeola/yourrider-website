import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/herosection'
import Mobilenav from '../components/Mobilenav'
import Navbar from '../components/Navbar'
import SectionFive from '../components/SectionFive'
import SectionFour from '../components/SectionFour'
import SectionOne from '../components/SectionOne'
import SectionSeven from '../components/SectionSeven'
import SectionSix from '../components/SectionSix'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <Mobilenav isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        {/* <SectionFive/> */}
        <SectionSix/>
        <SectionSeven/>
        <Footer/>
        
    </>
  )
}

export default Home