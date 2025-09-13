import React from 'react'

export default function Button({label,color,onClick}) {

  return (
    <div className='flex'>
      <button onClick={onClick} className={`${color} text-white font-bold px-3 py-1`}>{label}</button>
    </div>
    
  )
}
