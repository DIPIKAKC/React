import React from 'react'

export default function GridArchiProperty({label, image}) {
  return (
    <div className="shadow-md relative w-fit ">
        <img src={image} className='bg-cover bg-no-repeat' alt={label} />
        <p className='absolute top-0 text-white bg-black py-1.5 px-4 text-lg'>{label}</p>
    </div>
  )
}
