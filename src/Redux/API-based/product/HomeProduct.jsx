import React from 'react'
import { useGetAllProductsQuery } from './productApi'
import { Image } from '@heroui/react';

export default function HomeProduct() {

const{data, isLoading, error}=useGetAllProductsQuery();
 if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.data}</h1>
 console.log(data);

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {data && data.products.map((item) => {
        return (
          <div key={item.id} className="space-y-4">
            <Image
              isBlurred
              src={item.thumbnail}
              />
              <h1>{item.title}</h1>
          </div>
        )
      })}

    </div>
  )
}
