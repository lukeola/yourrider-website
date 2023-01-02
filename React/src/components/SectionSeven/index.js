import React from 'react'
import { ColumnOneIcons,  FormButton,  FormError,  FormInput,  FormTextArea,  Globalstyle, LocationWrapper, MailWrapper, PhoneWrapper, SectionSevenContainer, SectionSevenForms, SectionSevenHeader, SectionSevenHeadertext } from './SectionSevenElements'
import {FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const SectionSeven = () => {

   
  return (
    
    <SectionSevenContainer>
        <Globalstyle/>
        <SectionSevenHeader> Contact Us </SectionSevenHeader>
        <SectionSevenHeadertext>We are here for you</SectionSevenHeadertext>
        
        <LocationWrapper>
        <ColumnOneIcons><FaMapMarkerAlt/> </ColumnOneIcons>
          Nigeria Reinsurance Building, Zakaria <br></br>
          Maimalari St, Central Business District, Abuja
        </LocationWrapper>
        
        <PhoneWrapper> <ColumnOneIcons><FaPhoneAlt/></ColumnOneIcons> +2349121521213</PhoneWrapper>
        
        <MailWrapper><ColumnOneIcons><GrMail/></ColumnOneIcons> support@yourrider.com </MailWrapper>

        <SectionSevenForms>

          <label htmlFor='name'></label>
          <FormInput type='text' name='name' placeholder='Name'/>
          <label htmlFor='email'></label>
          <FormInput type='email' name='email' placeholder='Email'/>
          <label htmlFor='message'></label>
          <FormTextArea name='message' placeholder='Message'/>
          <FormError>An Error Occured</FormError>
          <FormButton type='submit'>Send Message</FormButton>
        </SectionSevenForms>
        
    </SectionSevenContainer>
  )
}

export default SectionSeven