import React from 'react'
import { HeaderText, LeftSide, RightHeader, RightIcons, RightItems, RightSide, RightText, SectionFourContainer, SectionFourHeader } from './SectionFourElements'
import Delivery from '../../images/delivery.png'
import InstallIcon from '../../images/install.png'
import SetupIcon from '../../images/setup.png'
import TrackIcon from '../../images/track.png'
import RequestIcon from '../../images/request.png'

const SectionFour = () => {
  return (
    <SectionFourContainer>
        <SectionFourHeader>Make Your Deliveries Anywhere</SectionFourHeader>
        <HeaderText>How Yourrider Works</HeaderText>
        <RightSide>
          <RightItems>
            <RightIcons>
              <img src={InstallIcon} alt='installicon'/>
            </RightIcons>
            <RightHeader>Install the App</RightHeader>
            <RightText>Get the app free on App Store or Google play, then go ahead and create your account.</RightText>
          </RightItems>

          <RightItems>
            <RightIcons>
              <img src={SetupIcon} alt='setup'/>
            </RightIcons>
            <RightHeader>Setup your profile</RightHeader>
            <RightText>Register on YOURRIDER mobile application and let’s create a personalized experience for you.</RightText>
          </RightItems>

          <RightItems>
            <RightIcons>
              <img src={RequestIcon} alt='request'/>
            </RightIcons>
            <RightHeader>REQUEST YOURRIDER</RightHeader>
            <RightText>Enter your pickup location, delivery point, item name, quantity/weight, proceed to view price. Get paired with a Rider. View Your Rider details and then, hire the Rider.</RightText>
          </RightItems>

          <RightItems>
            <RightIcons>
              <img src={TrackIcon} alt='track'/>
            </RightIcons>
            <RightHeader>TRACK YOURRIDER</RightHeader>
            <RightText>Map integration with Geolocation and Route Mapping You can keep track of your parcel in real time From dispatch up until delivery.. </RightText>
          </RightItems>
        </RightSide>
        <LeftSide><img src={Delivery} alt='deliveryimg'/>
        </LeftSide>
    </SectionFourContainer>
  )
}

export default SectionFour