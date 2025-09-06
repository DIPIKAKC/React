import React from 'react'

export default function DisplaySection() {
  return (

    // vw-responsive
    <div className='h-[46.5vw] max-w-full bg-no-repeat bg-cover bg-[url("https://www.w3schools.com/w3images/architect.jpg")] flex justify-center'> 
      {/* <img src="https://www.w3schools.com/w3images/architect.jpg" alt="" /> */}

      <div className='flex gap-4 items-center'>
        <h1 className='font-bold text-4xl bg-gray-600 text-white px-4 py-2'>BR</h1>
        <h1 className='font-bold text-4xl text-white'>Architects</h1>
      </div>

    </div>
  )
}
