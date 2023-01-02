import React from 'react'
import { HeroBgImage, HeroContainer, HeroHeader, HeroNav, HeroNavIcon, HeroNavItems, HeroNavText, HeroText, TrackingBox, TrackingBtn } from './HeroElements'
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
            <input style={{height:`32px`, fontSize:`16px`, width:`220px`,padding:`10px`,marginTop:`1%`,marginLeft:`1%`, border:`none`, background:` #FCFCFF`}} placeholder='Input Order ID'></input>
                <a href='/tracking'><TrackingBtn>Track Package</TrackingBtn></a>
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