import { Button, Image } from '@heroui/react';
import { useGetRecipeQuery, useLazyGetRecipeQuery } from './recipeApi';

export default function Recipe() {

  const { data, isLoading, error } = useGetRecipeQuery();
  const [func, { data:lazydata,isLoading: lazyload, error: lazyerror }] = useLazyGetRecipeQuery(); //lazy query
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.data}</h1>
  console.log(data);
  console.log(lazydata);


  return (
    <div>
      {/* <Button onPress={()=>func()}>Call data</Button> */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 px-5 py-10">
        {data && data.recipes.map((item) => {
          console.log(item.ingredients)
          return (
            <div key={item.id} className=" rounded-2xl shadow-lg">
              <Image
                isBlurred
                className='rounded-b-none'
                src={item.image}
              />
              <div className='p-4'>
                <h1 className='font-bold uppercase'>{item.name}</h1>
                <hr className='text-gray-300 my-2 '></hr>
                <h2 className='font-bold mb-2'>Ingredients</h2>
                <ul className="list-disc list-inside space-y-1">
                  {item.ingredients.slice(0, 4).map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>



            </div>
          )
        })}

      </div>
    </div>
  )
}
