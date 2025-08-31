import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Header() {
  return (
    <div className='py-1 px-10 shadow-lg flex items-baseline justify-between'>
      
      <h1 className='tracking-[5px]'> Gourmet au Catering </h1>

      <nav className='flex justify-between tracking-[5px]'>
        <HashLink className={'hover:bg-gray-300 px-5 py-3'} to='#about'>About</HashLink>
        <HashLink className={'hover:bg-gray-300 px-5 py-3'} to='#menu'>Menu</HashLink>
        <HashLink className={'hover:bg-gray-300 px-5 py-3'} to='#contact'>Contact</HashLink>
      </nav>

    </div>
  )
}
