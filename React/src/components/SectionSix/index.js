import React from 'react'
import { Boxes, BoxHeading, BoxImage, BoxText, BoxWrapper, Date, HeaderText, SectionSixConatiner, SectionSixHeader } from './SectionSixElements'
import Image from '../../images/partnership.png'
const SectionSix = () => {
  return (
    <SectionSixConatiner>
        <SectionSixHeader>Yourrider Blog</SectionSixHeader>
        <HeaderText>Know about our recent happenings</HeaderText>
        <BoxWrapper>
          <Boxes>
            <BoxImage><img src={Image} alt='partner'/></BoxImage>
            <Date>October 20, 2022</Date>
            <BoxHeading>Our Partnership With Kuda</BoxHeading>
            <BoxText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nunc potenti massa nunc curabitur urna atlectu...
              <a href='/'>Read more</a>
            </BoxText>
          </Boxes>

          <Boxes>
          <BoxImage><img src={Image} alt='partner'/></BoxImage>
            <Date>October 20, 2022</Date>
            <BoxHeading>Our Partnership With Kuda</BoxHeading>
            <BoxText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nunc potenti massa nunc curabitur urna atlectu...
              <a href='/'>Read more</a>
            </BoxText>
          </Boxes>

          <Boxes>
          <BoxImage><img src={Image} alt='partner'/></BoxImage>
          <Date>October 20, 2022</Date>
            <BoxHeading>Our Partnership With Kuda</BoxHeading>
            <BoxText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nunc potenti massa nunc curabitur urna atlectu...
              <a href='/'>Read more</a>
            </BoxText>
          </Boxes>
        </BoxWrapper>
    </SectionSixConatiner>
  )
}

export default SectionSix