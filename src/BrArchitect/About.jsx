import React from 'react'
import { aboutData } from './AboutData'
import AboutComponent from './Components/AboutComponent'

export default function About() {
  return (
    <div className='mt-15 ml-9 mr-9'>

       <div>
        <h1 className='text-2xl'>About</h1>
        <hr className='mt-3 mb-5'></hr>
        <p className='text-lg mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur eius itaque doloremque sit illo eos aperiam dolorum, ex, in error quisquam quaerat accusantium id, at natus voluptate maxime! Adipisci labore, dolores culpa id nemo optio dolorum eligendi sed error consectetur doloribus, autem enim eos, rem ipsam voluptas. Voluptas, repellendus saepe modi numquam similique, nobis sit omnis a accusamus esse quo asperiores at delectus tempore cupiditate quibusdam facilis aliquam illo consequatur, corrupti culpa. Iste voluptatem optio omnis. Itaque in aliquid, obcaecati repellat voluptatum expedita dolores, facilis quaerat porro veniam sunt, exercitationem perferendis vel ratione natus delectus ex eius saepe laboriosam.</p>
       </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {aboutData.map((about)=>{
          return <AboutComponent
                      id={about.id}
                      image={about.image}
                      label={about.label}
                      position={about.position}
                  />
        })}
      </div>

    </div>
  )
}
