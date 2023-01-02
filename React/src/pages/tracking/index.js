import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { DetailsSection, ExpArrival, ExpArrivalText, GreenCheck, OrderID, OrderLocation, TrackingBG, Trackingbutton, TrackingContainer, TrackingDate, TrackingHeader, TrackingHero, TrackingInput, TrackingItems, TrackingLocation, TrackingTime, TrackingTitle, TrackLine } from './TrackingElelments'
import GreenCheckimg  from '../../images/GreenCheck.png'
import GreyCheckimg from '../../images/GreyCheck.png'
import BgImage from '../../images/trackingbg.png'


const Tracking = () => {
  return (
    <>
        <Navbar/>
        <TrackingBG><img src={BgImage} alt='' style={{zIndex:`-1`}}/></TrackingBG>
        <TrackingHero>
        <TrackingHeader>Tracking Details</TrackingHeader>
        <TrackingInput >
            <input style={{height:`32px`, fontSize:`16px`, width:`540px`,padding:`10px`,marginTop:`1%`,marginLeft:`1%`, border:`none`, background:` #FCFCFF`}} placeholder='Input Order ID'></input>
            <Trackingbutton>Track Package</Trackingbutton>
        </TrackingInput>
        </TrackingHero>
        <DetailsSection>
            <OrderID>Order ID:#YR630455678234ERT6</OrderID>
            <OrderLocation>Lotus eye clinic, Fez street, Abuja</OrderLocation>
            <ExpArrival>Expected arrival Oct 23, 2023</ExpArrival>
            <ExpArrivalText>17, Adebowale Crescent, Lagos, Nigeria</ExpArrivalText>
            
            <TrackingContainer>
                <TrackingItems>
                    <TrackingDate>Oct 19</TrackingDate>
                    <TrackingTime>07:23am</TrackingTime>
                    <GreenCheck>
                        <img src={GreenCheckimg} alt=''/>
                    </GreenCheck>
                    <TrackingTitle>Order has been created by Yourrider Limited</TrackingTitle>
                    <TrackingLocation>Abuja, Nigeria</TrackingLocation>
                </TrackingItems>

                <TrackingItems>
                    <TrackingDate>Oct 19</TrackingDate>
                    <TrackingTime>07:23am</TrackingTime>
                    <TrackLine/>
                    <GreenCheck>
                        <img src={GreenCheckimg} alt=''/>
                    
                    </GreenCheck>
                    
                    <TrackingTitle>Order has been created by Yourrider Limited</TrackingTitle>
                    <TrackingLocation>Abuja, Nigeria</TrackingLocation>
                </TrackingItems>

                <TrackingItems>
                    <TrackingDate>Oct 19</TrackingDate>
                    <TrackingTime>07:23am</TrackingTime>
                    <TrackLine/>
                    <GreenCheck>
                        <img src={GreenCheckimg} alt=''/>
                    
                    </GreenCheck>
                    
                    <TrackingTitle>Order has been created by Yourrider Limited</TrackingTitle>
                    <TrackingLocation>Abuja, Nigeria</TrackingLocation>
                </TrackingItems>

                <TrackingItems>
                    <TrackingDate>Oct 19</TrackingDate>
                    <TrackingTime>07:23am</TrackingTime>
                    <TrackLine/>
                    <GreenCheck>
                        <img src={GreenCheckimg} alt=''/>
                    
                    </GreenCheck>
                    
                    <TrackingTitle>Order has been created by Yourrider Limited</TrackingTitle>
                    <TrackingLocation>Abuja, Nigeria</TrackingLocation>
                </TrackingItems>

                <TrackingItems>
                    <TrackingDate>Oct 19</TrackingDate>
                    <TrackingTime>07:23am</TrackingTime>
                    <TrackLine/>
                    <GreenCheck>
                        <img src={GreyCheckimg} alt=''/>
                    
                    </GreenCheck>
                    
                    <TrackingTitle>Order has been created by Yourrider Limited</TrackingTitle>
                    <TrackingLocation>Abuja, Nigeria</TrackingLocation>
                </TrackingItems>
            </TrackingContainer>
        </DetailsSection>
        <Footer/>
    </>
  )
}

export default Tracking