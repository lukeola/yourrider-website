import React from 'react'
import { BoxCircle, Boxes, BoxHeader, BoxIcon, BoxItems,BoxText, SectionTwoContainer, SectionTwoHeader, SectionTwoText } from './SectionTwoElements'
import Secured from '../../images/secure.png'
import Ease from '../../images/ease.png'
import Payment from '../../images/payment.png'
import Dashboard from '../../images/dashboard.png'
import Tracking from '../../images/track.png'
import Api from '../../images/api.png'


const SectionTwo = () => {
  return (
    <SectionTwoContainer>
        <SectionTwoHeader>Reasons to Choose Us</SectionTwoHeader>
        <SectionTwoText>Yourrider Premium Features</SectionTwoText>
          <Boxes>
            <BoxItems>
              <BoxCircle  style={{ background: `rgba(151, 71, 255, 0.2)` }}>
                <BoxIcon>
                  <img src={Secured} alt='secimg'/>
                </BoxIcon>
              </BoxCircle >
              <BoxHeader>Secured Data</BoxHeader>
              <BoxText>
              Send and recieve your packages securely perform your online transactions with confidence that your funds and bank details are safe and secure
              </BoxText>
            </BoxItems>

            <BoxItems>
              <BoxCircle style={{ background: `rgba(255, 210, 51, 0.2)` }}>
                <BoxIcon>
                  <img src={Ease} alt='ease'/>
                </BoxIcon>
              </BoxCircle>
              <BoxHeader>Ease of Use</BoxHeader>
              <BoxText>
              Deliveries has never been easy with yourrider, all you need is a smart phone and internet connection to get your parcel delivered where you want
              </BoxText>
          </BoxItems>

          <BoxItems>
              <BoxCircle style={{ background: `rgba(78, 203, 113, 0.2)` }}>
                <BoxIcon>
                  <img src={Payment} alt='paymentimg'/>
                </BoxIcon>
              </BoxCircle>
              <BoxHeader>Easy Payment System</BoxHeader>
              <BoxText>
              Swift and easy payment system. It is as easy as just tapping on a button, send your packages more easily and quickly
              </BoxText>
          </BoxItems>

          <BoxItems>
              <BoxCircle style={{ background: `rgba(6, 170, 160, 0.2)` }}>
                <BoxIcon>
                  <img src={Dashboard} alt='dash'/>
                </BoxIcon>
              </BoxCircle>
              <BoxHeader>Admin Dashboard</BoxHeader>
              <BoxText>
              Monitor all your deliveries and payments in one place and get access to 24/7 support help lines and access to our multiple deliveries features. 
              </BoxText>
            </BoxItems>

            <BoxItems>
              <BoxCircle style={{ background: `rgba(30, 22, 140, 0.2)` }}>
                <BoxIcon>
                <img src={Tracking} alt='tracking'/>
                </BoxIcon>
              </BoxCircle>
              <BoxHeader>Package Tracking</BoxHeader>
              <BoxText>
              Track your packages with our map integrated services or through our 24/7 open channels
              </BoxText>
          </BoxItems>

          <BoxItems>
              <BoxCircle style={{ background: `rgba(255, 72, 70, 0.2)` }}>
                <BoxIcon>
                <img src={Api} alt='api'/>
                </BoxIcon>
              </BoxCircle>
              <BoxHeader>API Integrated Services</BoxHeader>
              <BoxText>
              Well documented and easy api to use
              </BoxText>
          </BoxItems>
        </Boxes>
        
    </SectionTwoContainer>
  )
}

export default SectionTwo