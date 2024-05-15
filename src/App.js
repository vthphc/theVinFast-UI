import React from 'react'
import NavBar from './ui/NavBar'
import HomePage from './ui/HomePage'
import Info from './ui/Info'

export default function App() {
  return (
    <div class='flex flex-1 flex-col'>
      <NavBar />
      <HomePage />
      <Info />
    </div>
  )
}