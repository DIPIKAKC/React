import React from 'react'

export default function AboutComponent({label,image,position}) {
  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>

        <div className='py-2 space-y-1'>
            <h1 className='font-bold text-xl'>{label}</h1>
            <p className='font-semibold text-gray-400'>{position}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloremque quas</p>
        </div>

        <button className='w-full bg-gray-100 hover:bg-gray-200 py-1 mt-2'>Contact</button>

    </div>
  )
}
