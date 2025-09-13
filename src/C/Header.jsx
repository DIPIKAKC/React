import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div>
      <div className='py-2 px-3 bg-pink-200 mb-3 flex items-center justify-around'>
        <h1 className='font-bold text-2xl text-white'>Logo- header component</h1>

        <nav className='space-x-5'>
            <NavLink to={'/contacts'} className='text-white'> contacts </NavLink>
            <NavLink to={'/products'} className='text-white'> products </NavLink>
        </nav>
      </div>
    </div>
  )
}
