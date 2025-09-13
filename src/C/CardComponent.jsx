import React from 'react'
import { MdBrandingWatermark } from "react-icons/md";

//destructed as ot is in form of object
export default function CardComponent({label, icon}) {

  return (
    <div className='text-center p-5 mx-10 my-auto space-y-2 shadow-2xl shadow-gray-500 rounded-lg'>
      <div className='flex justify-center'>
        {icon}
      </div>
      <h1 className='font-bold text-lg'>{label}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem placeat soluta itaque illum, reprehenderit sit, eos voluptate odit, laudantium accusamus libero modi voluptatum maiores aliquam. Quis velit animi iste non laborum cupiditate repellat illum harum, voluptates delectus ipsam temporibus nemo! Dolores, enim officia rem amet sint maxime accusamus asperiores!</p>
    </div>
  )
}
