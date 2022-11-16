import React from 'react'
import { BoxCircle, Boxes, BoxHeader, BoxIcon, BoxItems,BoxText, SectionTwoContainer, SectionTwoHeader, SectionTwoText } from './SectionTwoElements'

const SectionTwo = () => {
  return (
    <SectionTwoContainer>
        <SectionTwoHeader>Reasons to Choose Us</SectionTwoHeader>
        <SectionTwoText>Yourrider Premium Features</SectionTwoText>
          <Boxes>
            <BoxItems>
              <BoxCircle  style={{ background: `red` }}>
                <BoxIcon></BoxIcon>
              </BoxCircle>
              <BoxHeader>Secured Data</BoxHeader>
              <BoxText>
              Send and recieve your packages securely perform your online transactions with confidence that your funds and bank details are safe and secure
              </BoxText>
            </BoxItems>

            <BoxItems>
              <BoxCircle>
                <BoxIcon></BoxIcon>
              </BoxCircle>
              <BoxHeader>Ease of Use</BoxHeader>
              <BoxText>
              Deliveries has never been easy with yourrider, all you need is a smart phone and internet connection to get your parcel delivered where you want
              </BoxText>
          </BoxItems>

          <BoxItems>
              <BoxCircle>
                <BoxIcon></BoxIcon>
              </BoxCircle>
              <BoxHeader>Easy Payment System</BoxHeader>
              <BoxText>
              Swift and easy payment system. It is as easy as just tapping on a button, send your packages more easily and quickly
              </BoxText>
          </BoxItems>

          <BoxItems>
              <BoxCircle>
                <BoxIcon></BoxIcon>
              </BoxCircle>
              <BoxHeader>Admin Dashboard</BoxHeader>
              <BoxText>
              Monitor all your deliveries and payments in one place and get access to 24/7 support help lines and access to our multiple deliveries features. 
              </BoxText>
            </BoxItems>

            <BoxItems>
              <BoxCircle>
                <BoxIcon></BoxIcon>
              </BoxCircle>
              <BoxHeader>Package Tracking</BoxHeader>
              <BoxText>
              Track your packages with our map integrated services or through our 24/7 open channels
              </BoxText>
          </BoxItems>

          <BoxItems>
              <BoxCircle>
                <BoxIcon></BoxIcon>
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