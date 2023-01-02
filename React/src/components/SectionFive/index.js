import React from 'react'
import { HeaderText, ImageContainer, SectionFiveContainer, SectionFiveHeader } from './SectionFiveElements'
import Images from '../../images/section5image.png'
const SectionFive = () => {
  return (
    <SectionFiveContainer>
        <SectionFiveHeader>Simple & Beautiful Interface</SectionFiveHeader>
        <HeaderText>Know everyting about yourrider APP</HeaderText>
        <ImageContainer>
          <img src={Images} alt='img'/>
        </ImageContainer>
    </SectionFiveContainer>
  )
}

export default SectionFive