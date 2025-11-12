import React from 'react'
import Hero from './Hero'
import PricingSection from './PricingSection'
import Automation from './AutoMation'
import Footer from './Footer'
import JoinCommunity from './JoinCommunity'
import Navbar from './Navbar'
import ScrollAnimations from './ScrollAnimation'
import Testimonials from './Testimonials'
import VideoRobot from './VideoRobot'
import HowWeWorkFlow from './HowWeWork'



const Home = () => {
  return (
    <>
     <ScrollAnimations/>
     
      <Hero />
       <Automation/>
      <PricingSection />
 
     
      <Testimonials/>
      <Footer/>
      <HowWeWorkFlow/>
 
      
      
    </>
  )
}

export default Home
