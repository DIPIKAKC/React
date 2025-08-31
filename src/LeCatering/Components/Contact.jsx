import React from 'react'

export default function Contact() {
  return (
    <div className='ml-30 mr-30 mt-10 mb-10 pl-10 pr-10 pt-5 pb-5 h-fit flex flex-col space-y-5 justify-center'>
      <h1 className='tracking-[5px] text-4xl'>Contact</h1>
      <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
      <h3 className='font-semibold text-gray-400 text-xl'>Catering Service, 42nd Living St, 43043 New York, NY</h3>
      <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
      <form className="grid grid-cols-1 gap-7 text-gray-500">
        <input
          type="text"
          placeholder="Name"
          className="border-b p-2 outline-none focus:border-gray-500"
        />
        <input
          type="text"
          placeholder="How many people"
          className="border-b p-2 outline-none focus:border-gray-500"
        />
        <input
          type="datetime-local"
          defaultValue={new Date().toISOString().slice(0, 16)}
          className="border-b p-2 outline-none focus:border-gray-500"
        />
        <input
          type="text"
          placeholder="Message / Special requirements"
          className="border-b p-2 outline-none focus:border-gray-500"
        />
        <button className="mt-4 bg-gray-200 tracking-wider w-fit px-5 py-2 hover:bg-gray-300">
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}
