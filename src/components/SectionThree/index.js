import React from 'react'
import { BackgroundImage, Customers, Downloads, Iphone, SectionThreeContainer, Text1, Text2 } from './SectionThreeElements'
import BgImage from '../../images/pattern.png'
import Iphone12 from '../../images/iPhone.png'
import CustomersImg from '../../images/cuustomers.png'
import Plusicon from '../../images/plusicon.png'
import GooglePlay from '../../images/google-play.png'
import Appstore from '../../images/appstore.png'

const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <Customers>
        <img src={CustomersImg} alt='img'/>
        <img src={Plusicon} alt='iconimg' style={{ marginBottom: `25px`,marginLeft: `-10px`  }}/>
      </Customers>
      
      <Text1>Join our 10,000 users making the most of Yourrider’s web and mobile app</Text1>
      <Text2>Yourrider is available on all devices
              We are with you wherever you are
              We are mobile 
              We are on the go... 
      </Text2>
      <Downloads>
        <img src={GooglePlay} alt='gplay' style={{height: `52px`, width: `180px`,background: `white`, borderRadius:`8px`, marginRight:`20px`}}/>
        <img src={Appstore} alt='gplay' style={{height: `52px`, width: `180px`,background: `white`, borderRadius:`8px`}}/>
      </Downloads>
      <BackgroundImage><img src={BgImage} alt='bgimage'/></BackgroundImage>
      <Iphone>
        <img src={Iphone12} alt='iphone'/>
      </Iphone>
     
    </SectionThreeContainer>
  )
}

export default SectionThree