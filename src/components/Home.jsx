import React from 'react'
import Hero from './Hero'
import PricingSection from './PricingSection'
import Automation from './AutoMation'
import Footer from './Footer'
import JoinCommunity from './JoinCommunity'
import Navbar from './Navbar'
import ScrollAnimations from './ScrollAnimation'



const Home = () => {
  return (
    <>
     <ScrollAnimations/>
     
      <Hero />
      <PricingSection />
      <Automation/>
      <JoinCommunity/>
      <Footer/>

      
      
    </>
  )
}

export default Home
