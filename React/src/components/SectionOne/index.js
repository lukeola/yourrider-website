import React from 'react'
import { Client1, Client1Items,Client2Items, Client2, SectionOneContainer, SectionOneHeader1, SectionOneText1, SectionOneHeader2, SectionOneText2, Categories, CategoriesItems } from './SectionOneElements'
import Kuda from '../../images/kuda.png'
import Paylidate from '../../images/paylidate.png'
import Nescart from '../../images/nescart.png'
import Bolt from '../../images/bolt.png'
import Konga from '../../images/konga.png'
import Jumia from '../../images/jumia.png'
import Amerigo from '../../images/amerigo.png'
import Providus from '../../images/providus.png'

const SectionOne = () => {
  return (
    <SectionOneContainer>
        <SectionOneHeader1>Clients that Trust our Services</SectionOneHeader1>
        <SectionOneText1>You are in good company</SectionOneText1>
        <Client1>
          <Client1Items><img src={Kuda} alt='kuda'/></Client1Items>
          <Client1Items><img src={Paylidate} alt='paylidate'/></Client1Items>
          <Client1Items><img src={Nescart} alt='nescart'/></Client1Items>
          <Client1Items><img src={Bolt} alt='bolt'/></Client1Items>
        </Client1>

        <Client2>
        <Client2Items><img src={Konga} alt='konga'/></Client2Items>
          <Client2Items><img src={Jumia} alt='jumia'/></Client2Items>
          <Client2Items><img src={Amerigo} alt='amerigo'/></Client2Items>
          <Client2Items><img src={Providus} alt='providus'/></Client2Items>
        </Client2>
        <SectionOneHeader2>Choose your Category</SectionOneHeader2>
        <SectionOneText2>Let’s Handle Your Logistics</SectionOneText2>
        <Categories>
          <CategoriesItems>E-Commerce</CategoriesItems>
          <CategoriesItems>Banking & Fintech</CategoriesItems>
          <CategoriesItems>Oil & Gas</CategoriesItems>
          <CategoriesItems>Government Enterprise Agencies</CategoriesItems>
          <CategoriesItems>Medical</CategoriesItems>
          <CategoriesItems>Consultancy</CategoriesItems>
          <CategoriesItems>Others</CategoriesItems>
        </Categories>
    </SectionOneContainer>
  )
}

export default SectionOne