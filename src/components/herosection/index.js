import React from 'react'
import { HeroBgImage, HeroContainer, HeroHeader, HeroNav, HeroNavIcon, HeroNavItems, HeroNavText, HeroText, TrackingBox, TrackingBtn, TrackingText } from './HeroElements'
import {FaTruckMoving,FaPlaneDeparture, FaWarehouse} from 'react-icons/fa'
import {GiCargoShip} from 'react-icons/gi'
import Background from '../../images/header-yourrider.jpg'

const HeroSection = () => {
  return (
    <>
        <HeroContainer>
            <HeroHeader>
                Recieve and Deliver Packages with Ease
            </HeroHeader>
            <HeroText>
            Unlock the Best Logistics Experience for your Business Needs with our Secure and Flexible Payment Platform, and Earn Free Yourrider Token.
            </HeroText>
            <HeroBgImage><img src={Background} alt='bg'/></HeroBgImage>
            <TrackingBox>
                <TrackingText type='text'>Input your Tracking ID</TrackingText>
                <TrackingBtn>Track Package</TrackingBtn>
            </TrackingBox>
            
            <HeroNav>
                <HeroNavItems>

                    <HeroNavIcon>
                        <FaTruckMoving/>
                    </HeroNavIcon>

                    <HeroNavText>Road Shipment</HeroNavText>

                </HeroNavItems>
                
                <HeroNavItems>
                    <HeroNavIcon>
                        <FaPlaneDeparture/>
                    </HeroNavIcon>
                    <HeroNavText>Air Shipment</HeroNavText>
                </HeroNavItems>
                
                <HeroNavItems>
                    <HeroNavIcon>
                        <GiCargoShip/>
                    </HeroNavIcon>
                    <HeroNavText>Ocean Shipment</HeroNavText>
                </HeroNavItems>
                
                <HeroNavItems>
                    <HeroNavIcon>
                        <FaWarehouse/>
                    </HeroNavIcon>
                    <HeroNavText>Warehousing</HeroNavText>
                </HeroNavItems>
                
            </HeroNav>

        </HeroContainer>
    </> 
    
    )
}

export default HeroSection