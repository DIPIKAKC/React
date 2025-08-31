import React from 'react'

export default function Menu() {
  return (
    <div className='ml-30 mr-30 mt-10 mb-10 pl-10 pr-10 pt-5 pb-5 h-fit'>

      <div className='flex justify-evenly'>

        <div className='flex flex-col space-y-9'>
            <h1 className='text-4xl text-center tracking-[5px]'>Our Menu</h1>
            <div className='space-y-3'>
                <h3 className='text-xl tracking-[5px]'>Bread Basket</h3>
                <p className='text-gray-400'>Assortment of fresh baked fruit breads and muffins 5.50</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-xl tracking-[5px]'>Honey Almond Granola with Fruits</h3>
                <p className='text-gray-400'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-xl tracking-[5px]'>Belgian Waffle</h3>
                <p className='text-gray-400'>Vanilla flavored batter with malted flour 7.50</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-xl tracking-[5px]'>Scrambled eggs</h3>
                <p className='text-gray-400'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-xl tracking-[5px]'>Blueberry Pancakes</h3>
                <p className='text-gray-400'>With syrup, butter and lots of berries 8.50</p>
            </div>
        </div>

        <img src="https://www.w3schools.com/w3images/tablesetting.jpg" className={'h-150 bg-cover bg-no-repeat'} alt="" />

      </div>

    </div>
  )
}
