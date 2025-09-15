import CardComponent from '@/C/CardComponent'
import React from 'react'
import { MdBrandingWatermark } from 'react-icons/md'

//data passing from parent to multiple components => props (Data passing)
// passed data structure in main file: {label: 'value'} => accessed through 'props' keyword in component
//  CHILDREN?? => in array; from child component to another child



export default function Cards() {
  return (
    <div className='flex flex-col gap-4'>
      <CardComponent label={'Branding'} icon={<MdBrandingWatermark size={40}/>}/>
      <CardComponent label={'Content Writing'}/>
      <CardComponent label={'Web Development'}/>
    </div>
  )
}
