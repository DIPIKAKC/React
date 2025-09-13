import React from 'react'

export default function GridCard({title, author, image, span}) {
  return (
    <div className={`bg-orange-300 rounded-lg overflow-hidden ${span || ''}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h2 className="text-black font-semibold text-sm">{title}</h2>
        <p className="text-black font-bold text-lg">{author}</p>
      </div>
    </div>
  )
}
