import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

export default function Hook1() {

const [count, setCount] = useState(0); //consistsninitial state and boundfxn obj that updates state and re-renders

const handleIncrement = () => {
    // prev=> count ko initial value
    setCount((prev)=> prev+1);
}
const handleDecrement = () => {
    // prev=> count ko initial value
    setCount((prev)=> prev-1);
}

  return (
    <div className='p-5'>
      <h1 className='font-bold text-2xl'>Hooks</h1>
      <h1>{count}{count%2===0 ? 'Even' : 'Odd'}</h1>

      <div className='flex gap-3'>
        <Button onClick={handleIncrement} className={'px-10 py-10'}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  )
}
