import GridCard from '@/C/GridCard'
import React from 'react'

export default function Grid() {
  return (
    <div className="p-6 bg-amber-200 h-fit w-200 m-auto">
      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        <GridCard 
          title={'International Artist Feature: Malaysia'} 
          author={'MARY WRINKLER'}
          image="https://plus.unsplash.com/premium_photo-1749525879938-beabd69ff23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
          span="col-span-2"
          />
        <GridCard 
          title={'International Artist Feature: Malaysia'} 
          author={'MARY WRINKLER'}
          image="https://images.unsplash.com/photo-1748278060261-a988ab5f226e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        />
      <GridCard 
        title={'International Artist Feature: Malaysia'} 
        author={'MARY WRINKLER'}
        image="https://images.unsplash.com/photo-1623427968940-9f58bd319b27?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
        <GridCard 
          title={'International Artist Feature: Malaysia'} 
          author={'MARY WRINKLER'}
          image="https://images.unsplash.com/photo-1687439960843-327512994899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
        />
          <GridCard 
            title={'International Artist Feature: Malaysia'} 
            author={'MARY WRINKLER'}
            image="https://images.unsplash.com/photo-1755147047531-31d55e67d203?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        <GridCard 
          title={'International Artist Feature: Malaysia'} 
          author={'MARY WRINKLER'}
          image="https://images.unsplash.com/photo-1588478639064-6f1266868f6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
        />
        <GridCard 
          title={'International Artist Feature: Malaysia'} 
          author={'MARY WRINKLER'}
          image="https://images.unsplash.com/photo-1646478621100-d8e64ed0e655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
        />
      </div>
    </div>
  )
}
