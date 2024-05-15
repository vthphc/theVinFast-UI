import React from 'react'

export default function NavBar() {
  return (
    <div class='flex flex-1 h-11 justify-around px-10 py-4 bg-white'>
      <img
        class='hover:opacity-80 cursor-pointer transition-opacity duration-300 ease-in-out'
        src='https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg'
        alt='logo' />
      <h1
        class='text-black font-alata
        hover:text-blue-500 cursor-pointer 
        transition-colors duration-300 ease-in-out'>Car</h1>
      <h1
        class='text-black font-alata
        hover:text-blue-500 cursor-pointer 
        transition-colors duration-300 ease-in-out'>E-Scooters</h1>
      <h1
        class='text-black font-alata
        hover:text-blue-500 cursor-pointer 
        transition-colors duration-300 ease-in-out'>Battery & Charging stations</h1>
      <h1
        class='text-black font-alata
        hover:text-blue-500 cursor-pointer 
        transition-colors duration-300 ease-in-out'>About us</h1>
    </div>
  )
}
