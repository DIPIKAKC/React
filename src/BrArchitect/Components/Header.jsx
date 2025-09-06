import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    // if fixed instead of sticky width should be 100%

    <div className='shadow-lg px-9 py-3 flex justify-between items-baseline tracking-[3px] sticky top-0 bg-white'> 

      <h1 className='font-bold text-xl'>BR <span className='font-normal'>Architects</span></h1>

      <nav className='space-x-6'>
        <NavLink>Projects</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </nav>

    </div>
  )
}
