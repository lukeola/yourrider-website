import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/herosection'
import Mobilenav from '../components/Mobilenav'
import Navbar from '../components/Navbar'
import Reviews from '../components/Reviews'
import SectionFive from '../components/SectionFive'
import SectionFour from '../components/SectionFour'
import SectionOne from '../components/SectionOne'
import SectionSeven from '../components/SectionSeven'
import SectionSix from '../components/SectionSix'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
      Aos.init({duration: 2000});
      
    }, []);
  return (
    <>
        <Mobilenav isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <SectionOne/>

        <div data-aos = "fade-up">
        <SectionTwo/>
        </div>

        <div data-aos = "fade-right">
        <SectionThree/>
        </div>

        <div data-aos = "fade-up">
        <SectionFour/>
        </div>

        <div data-aos = "fade-up">
        <SectionFive/>
        </div>

        <div data-aos = "fade-up">
        <Reviews/>
        </div>

        <div data-aos = "fade-up">
        <SectionSix/>
        </div>

        <div data-aos = "fade-left">
        <SectionSeven/>
        </div>

        <Footer/>
        
    </>
  )
}

export default Home