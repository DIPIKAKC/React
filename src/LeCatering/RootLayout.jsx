import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import DisplaySection from './DisplaySection'
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function RootLayout() {
  return (
    <div>
      <Outlet />
      <Header/>
      <DisplaySection/>
      <div id="about">
        <About />
      </div>

      <hr className='mt-5 mb-5 ml-30 mr-30'></hr>
      <div id="menu">
        <Menu />
      </div>
      <hr className='mt-5 mb-5 ml-30 mr-30'></hr>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
