import React from 'react'
import { HeaderText, LeftSide, RightSide, SectionFourContainer, SectionFourHeader } from './SectionFourElements'
import Delivery from '../../images/delivery.png'

const SectionFour = () => {
  return (
    <SectionFourContainer>
        <SectionFourHeader>Make Your Deliveries Anywhere</SectionFourHeader>
        <HeaderText>How Yourrider Works</HeaderText>
        <RightSide>

        </RightSide>
        <LeftSide><img src={Delivery} alt='deliveryimg'/>
        </LeftSide>
    </SectionFourContainer>
  )
}

export default SectionFour