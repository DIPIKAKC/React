import Button from '@/C/Button';
import Header from '@/C/Header';
import React from 'react'
import { NavLink, Outlet } from 'react-router';


export default function Home() {

  const handleClick=()=>{
    const age= prompt('Enter your age: ');
    console.log(age);
    if(Number(age)>=18){
      alert('You are an adult');
    }else{
      alert('You are not an adult');
    }
  }
  
  const meowmeow=()=>{
    const number= prompt('Enter your number: ');
    alert(number**2)
  }

  const arrowNum=(n)=>{
    alert(n**n);
  }
  
  const oddEven=()=>{
    const num= prompt('Enter a number: ');
    if(Number(num)%2==0){
      alert('Even');
    }else{
      alert('Odd');
    }
  }

  return (
    <div>
      <Header />

      <nav className='flex space-x-2 space-y-2 bg-amber-200 w-fit'>
        <NavLink to={'/page1'}>Page1</NavLink>
        <NavLink to={'/page2'}>Page2</NavLink>
      </nav>
      {/* for child paths working:only child change in main page- nested routing */}
      <Outlet/> 


        <div className='flex gap-5'>
            <Button label={'hi dipika'} color={'bg-pink-200'} onClick={handleClick}/>
            <Button label={'bye dipika'} color={'bg-amber-400'} onClick={meowmeow}/>
            <Button label={'arrow num'} color={'bg-amber-400'} onClick={arrowNum(9)}/>
            <Button label={'odd even'} color={'bg-violet-300'} onClick={oddEven}/>

            {/* event object => it gives info of the event i.e. about a button */}
              <Button label={'odd even'} color={'bg-violet-300'} onClick={(e)=>{console.log(e)}}/>
              {/* for input event and targetting value */}
              <input type="text" placeholder='meow' onChange={(e)=>{console.log(e.target.value)}} />
        </div>
        
     {/* <div className="p-5 flex gap-5 justify-start h-screen content-center  flex-wrap">
        <div className="h-20 basis-20 bg-black"></div>
        <div className="h-20 basis-20 bg-red-600"></div>
        <div className="h-20 basis-20 bg-pink-800"></div>
        <div className="h-20 basis-20 bg-purple-600"></div>
        <div className="h-20 basis-20 bg-amber-400 grow"></div>
        <div className="h-20 basis-20 bg-blue-700 grow"></div>
    </div> */}
    
    
        <div className="p-5 grid grid-cols-3 grid-rows-[100px_300px] gap-2">
        <div className="bg-black"></div>
        <div className="bg-red-600"></div>
        <div className="bg-pink-800"></div>
        <div className="bg-purple-600"></div>
        <div className="bg-amber-400"></div>
        <div className="bg-blue-700"></div>
    </div>



    </div>


  )
}
