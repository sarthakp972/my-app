import React from 'react'
import HomeHeroSection from '../Components/HomeHeroSection'
import HomeVideo from '../Components/Homevideo'
import OfferSection from '../Components/OfferSection'
import ServicePromotion from '../Components/ServicePromotion'

export default function Home() {
  return (
    <div>
         <HomeHeroSection/>
        <HomeVideo/>
        
        <OfferSection/>
       <ServicePromotion/>

    </div>
  )
}
