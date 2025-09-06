import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import DisplaySection from './DisplaySection'
import PropertySection from './PropertySection'
import About from './About'
import Contact from './Contact'
import Footer from './Components/Footer'

export default function RootBrArchitect() {
  return (
    <div>
      <Outlet />
      <Header />
      <DisplaySection/>
      <PropertySection />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
