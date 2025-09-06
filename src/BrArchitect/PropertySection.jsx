import React from 'react'
import GridArchiProperty from './Components/GridArchiProperty'
import { propertyData } from './PropertyData'

export default function PropertySection() {
    console.log(propertyData)
  return (
    <div className='mt-15 ml-9 mr-9'>
      <h1 className='text-2xl'>Projects</h1>
      <hr className='mt-3 mb-5'></hr>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {propertyData.map((property)=>{
          return <GridArchiProperty
                      id={property.id}
                      image={property.image}
                      label={property.label}
                  />
        })}
      </div>
    </div>
  )
}
