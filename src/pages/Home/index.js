import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import Education from './Education'



function Home() {
  return (
    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <LeftSider />
       
      </div>
    </div>
  )
}

export default Home

