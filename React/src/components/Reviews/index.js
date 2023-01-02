import React from 'react'
import { ReviewBoxes, Reviewer, ReviewHeader, ReviewHeaderText, ReviewQuote, ReviewRating, ReviewsContainer, ReviewSection, ReviewSubject, ReviewText } from './ReviewElements'
import Rating from '../../images/rating.png'
import Quote from '../../images/reviewquote.png'
import Reviewerinfo from '../../images/reviewer.png'


const Reviews = () => {
  return (
    <ReviewsContainer>
        <ReviewHeader>What Our Customers Are Saying</ReviewHeader>
        <ReviewHeaderText>They trusted us and we delivered</ReviewHeaderText>
        <ReviewSection>
            <ReviewBoxes>
                <ReviewRating>
                    <img src={Rating} alt='ratingimg'/>
                </ReviewRating>
                <ReviewQuote>
                    <img src={Quote} alt='quoteimg'/>
                </ReviewQuote>
                <ReviewSubject>Excellent Service & Support</ReviewSubject>
                <ReviewText>Hi 👋 I’m Deborah Osahor CEO DG-Logistics, Connecting to customers and monitoring my bikes has always been a tasking job I face everyday, Registering my bikes with YourRider is the smartest decision I’ve made. I’m more productive and also making more money and that’s the goal, yeah💰 I am happy adding technology to my business.</ReviewText>
                <Reviewer>
                    <img src={Reviewerinfo} alt='revimg'/>
                </Reviewer>
            </ReviewBoxes>

            <ReviewBoxes>
                <ReviewRating>
                    <img src={Rating} alt='ratingimg'/>
                </ReviewRating>
                <ReviewQuote>
                    <img src={Quote} alt='quoteimg'/>
                </ReviewQuote>
                <ReviewSubject>Great Work, Keep it up!</ReviewSubject>
                <ReviewText>I'm Foluke Olajide CEO of Bonita Bodyworks and Lifestyle. We produce Natural Products and getting to deliver to customers can be very stressful. Until I downloaded Yourrider. Delivery is now swift and my customers are happy their orders gets to them in good time and untampered. Thanks Yourrider</ReviewText>
                <Reviewer>
                    <img src={Reviewerinfo} alt='revimg'/>
                </Reviewer>
            </ReviewBoxes>

            <ReviewBoxes>
                <ReviewRating>
                    <img src={Rating} alt='ratingimg'/>
                </ReviewRating>
                <ReviewQuote>
                    <img src={Quote} alt='quoteimg'/>
                </ReviewQuote>
                <ReviewSubject>Great Support</ReviewSubject>
                <ReviewText>My Name is Victor Akor CEO Saintvic Design As a graphic designer customer satisfaction is a very huge deal for me, I always need to get documents to my customers fast, accurate-and delivered in good shape, YourRider gets my deliveries going sleek and orderly.❤️</ReviewText>
                <Reviewer>
                    <img src={Reviewerinfo} alt='revimg'/>
                </Reviewer>
            </ReviewBoxes>
        </ReviewSection>
    </ReviewsContainer>
  )
}

export default Reviews