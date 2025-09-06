import React from 'react'

export default function Contact() {
  return (
    <div className='mt-15 ml-9 mr-9'>

        <h1 className='text-2xl'>Contact</h1>
        <hr className='mt-3 mb-5'></hr>
        <p className='text-lg'>Lets get in touch and talk about your next project.</p>
      
        <div className='pt-3 pb-5'>
            <form className="grid grid-cols-1 gap-3 text-gray-500">
                <input 
                    type="text" 
                    placeholder='Name' 
                    className="border p-2"
                />
                <input 
                    type="text" 
                    placeholder='Email' 
                    className="border p-2"
                />
                <input 
                    type="text" 
                    placeholder='Subject' 
                    className="border p-2"
                />
                <input 
                    type="text" 
                    placeholder='Comment' 
                    className="border p-2"
                />

            </form>
        </div>

        <button className='w-fit bg-black text-white px-6 py-2.5'> SEND MESSAGE </button>

        <img src="https://www.w3schools.com/w3images/map.jpg" className='my-10 bg-no-repeat' alt="" />
    </div>
  )
}
