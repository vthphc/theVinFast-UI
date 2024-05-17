import React from 'react'
import NavBar from './ui/NavBar'
import HomePage from './ui/HomePage'
import Footer from './ui/Footer'

export default function App() {
  return (
    <div class='flex flex-1 flex-col'>
      <NavBar />
      <HomePage />
      <Footer />
      {/* <Info /> */}
    </div>
  )
}