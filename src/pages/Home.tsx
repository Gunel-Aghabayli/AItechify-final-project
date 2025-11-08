import React from 'react'
import Hero from '../components/Hero'
import ServiceSlider from '../components/Service'
import Team from '../components/Team'
import Case from '../components/Case'
import Process from '../components/Process'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ServiceSlider/>
      <Team/>
      <Case/>
      <Process/>
    </div>
  )
}

export default Home