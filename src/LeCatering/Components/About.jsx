import React from 'react'

export default function About() {
  return (
    <div className='ml-30 mr-30 mt-10 mb-10 pl-10 pr-10 pt-5 pb-5 h-fit'>

      <div className='grid grid-cols-2 gap-9'>

        <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" className={'bg-cover bg-no-repeat'} alt="" />

        <div className='flex flex-col space-y-9 pt-10'>
            <h1 className='text-4xl text-center tracking-[5px]'>About Catering</h1>
            <div className='flex flex-col space-y-7'>
                <h1 className='text-xl text-center tracking-[3px]'>Tradition since 1889</h1>
                <p className='text-xl'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className={'bg-gray-300 py-1 px-2'}>seasonal</span> ingredients.</p>
                <p className='text-xl text-gray-400'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>

      </div>

    </div>
  )
}
