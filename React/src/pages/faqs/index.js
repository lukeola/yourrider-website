import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { FaqHeader, FaqHeaderText, FaqHero, Faqimage, FaqItems, FaqSection, FaqText, FaqTitle, FaqWrapper, GetinTouchSection, GITButton, GITHeader, GITImage, GITText, OpenClose } from './FaqElements'
import GIT from '../../images/GITimage.png'
import FAQ from '../../images/FAQ.png'
import OpenIcon from '../../images/openIcon.png'
import CloseIcon from '../../images/closeIcon.png'

const Faqs = () => {
  return (
    <>
    <Navbar/>
    <FaqHero>
      <FaqHeader>Frequently Asked Questions</FaqHeader>
      <Faqimage>
        <img src={FAQ} alt=''/>
      </Faqimage>
      <FaqHeaderText>Everything you need to know about our product and services. Can’t find an answer to your questions please <a href='/chat' >chat our friendly team</a></FaqHeaderText>
    </FaqHero>
    <FaqWrapper>
      <FaqItems>
        <OpenClose>
          <img src={OpenIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What are the payment options?</FaqTitle>
        <FaqText>We have 3 options. You can choose to either pay by cash, through YOUR RIDER App Token or by using your debit card in the app. </FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>Why does the app asks for an update?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>Can I cancel my order?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
        <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>Does Yourrider handle payment on delivery?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
        <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>Can I coallate the fares of all the trips and pay after all deliveries are done?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What if I want to pay cash and Yourrider does not have change?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>Who can use Yourrider?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What insurance do I have for my shipments?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What can I ship?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What differentiate Yourrider from traditional logistic company?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What differentiate Yourrider from traditional logistic company?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>

      <FaqItems>
      <OpenClose>
          <img src={CloseIcon} alt=''/>
        </OpenClose>
        <FaqTitle>What does it cost to use Yourrider?</FaqTitle>
        <FaqText></FaqText>
      </FaqItems>
    </FaqWrapper>
    <FaqSection>

    </FaqSection>
    <GetinTouchSection>
      <GITImage>
        <img src={GIT} alt=''/>
      </GITImage>
      <GITHeader>Still have questions?</GITHeader>
      <GITText>Can’t find the answer you are looking for? Please contact our service team</GITText>
      <a href='/contact' ><GITButton>Get in touch</GITButton> </a>
    </GetinTouchSection>
    <Footer/>
    </>
  )
}

export default Faqs