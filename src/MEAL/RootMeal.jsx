import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import MealCat from './MealCat'

export default function RootMeal() {
  return (
    <div>

      <Header/>
      <Outlet/>
      
    </div>
  )
}
