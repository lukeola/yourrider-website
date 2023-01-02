import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Divider, Divider2, FromContainer, HeaderText, InfoTitle, LoginContainer, LoginRectangle, LoginText, OderTitle, OrderContainer,  OrderHeader,  OrderWrapper,  PackageContainer,  PackageHeader,  PackageInfo,  PackageInfoWrapper,  PackageText,  QuoteContainer, QuoteHeader, ToContainer } from './QuoteElements'
import Infoicon from '../../images/infocircle.png'

const Quote = () => {
  return (
    <>
    <Navbar/>
    <QuoteContainer>
      <QuoteHeader>Create delivery order</QuoteHeader>
      <HeaderText>Please fill in the delivery details.</HeaderText>
      <OrderContainer>
        <LoginContainer>
          <LoginRectangle>
            <img src={Infoicon} alt='' style={{marginTop:`43%`, marginLeft:`30%`}}/>
          </LoginRectangle>
          <LoginText>If you already have an account with Yourrider please <a href='/login' style={{fontStyle:`bold`, color:`#000080`}}>Login </a></LoginText>
        </LoginContainer>

        <FromContainer>
          <OrderHeader>From</OrderHeader>
          <OrderWrapper>
          <OderTitle>Name</OderTitle>
          <input placeholder="Sender's Name" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>State</OderTitle>
          <input placeholder="Sender’s State" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>Address</OderTitle>
          <input placeholder="Sender's Address" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>Phone Number</OderTitle>
          <input placeholder="Sender's Phone Number" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>E-mail</OderTitle>
          <input placeholder="Sender's E-mail" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>
        </FromContainer>

          <Divider/>

        <ToContainer>
          <OrderHeader>To</OrderHeader>
          <OrderWrapper>
          <OderTitle>Name</OderTitle>
          <input placeholder=" Receiver’s Name" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>State</OderTitle>
          <input placeholder=" Receiver’s State" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>Address</OderTitle>
          <input placeholder=" Receiver’s Address" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>Phone Number</OderTitle>
          <input placeholder=" Receiver’s Phone Number" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>

          <OrderWrapper>
          <OderTitle>E-mail</OderTitle>
          <input placeholder=" Receiver’s E-mail" style={{width: `504px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </OrderWrapper>
        </ToContainer>

        <Divider2/>

        <PackageContainer>
          <PackageHeader>Package information</PackageHeader>
          <PackageText>Please enter the package details</PackageText>
          <PackageInfoWrapper>
          <PackageInfo>
            <InfoTitle>Package Name</InfoTitle>
            <input placeholder=" Enter Package Name" style={{width: `331px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </PackageInfo>

          <PackageInfo>
            <InfoTitle>Package Name</InfoTitle>
            <input placeholder=" Enter Package Name" style={{width: `331px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </PackageInfo>

          <PackageInfo>
            <InfoTitle>Package Name</InfoTitle>
            <input placeholder=" Enter Package Name" style={{width: `331px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </PackageInfo>

          <PackageInfo>
            <InfoTitle>Package Name</InfoTitle>
            <input placeholder=" Enter Package Name" style={{width: `331px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </PackageInfo>

          <PackageInfo>
            <InfoTitle>Package Name</InfoTitle>
            <input placeholder=" Enter Package Name" style={{width: `331px`,height: `28px`,background: `#FCFCFF`, fontSize:`16px`, padding:`10px`, border: `1px solid #E6E6E8`,borderRadius:`4px`}}></input>
          </PackageInfo>
          </PackageInfoWrapper>
        </PackageContainer>
      </OrderContainer>
    </QuoteContainer>

    <Footer/>
    </>
  )
}

export default Quote