import React from 'react'
import Cars from '../NavBarContent/Cars';
import AboutUs from '../NavBarContent/AboutUs';

export default function NavBar() {
  const [isCarsClicked, setCarsIsClicked] = React.useState(false);
  const [isEcootersClicked, setEcootersIsClicked] = React.useState(false);
  const [isLocationsClicked, setLocationsyIsClicked] = React.useState(false);
  const [isAboutUsClicked, setAboutUsIsClicked] = React.useState(false);

  const handleCarsClick = () => {
    setCarsIsClicked(!isCarsClicked);
    setEcootersIsClicked(false);
    setLocationsyIsClicked(false);
    setAboutUsIsClicked(false);
  }

  const handleEcootersClick = () => {
    setCarsIsClicked(false);
    setEcootersIsClicked(!isEcootersClicked);
    setLocationsyIsClicked(false);
    setAboutUsIsClicked(false);
  }

  const handleLocationsClick = () => {
    setCarsIsClicked(false);
    setEcootersIsClicked(false);
    setLocationsyIsClicked(!isLocationsClicked);
    setAboutUsIsClicked(false);
  }

  const handleAboutUsClick = () => {
    setCarsIsClicked(false);
    setEcootersIsClicked(false);
    setLocationsyIsClicked(false);
    setAboutUsIsClicked(!isAboutUsClicked);
  }

  return (
    <div class='flex flex-col bg-white'>
      <div class='flex flex-1 h-11 justify-around px-10 py-2 bg-white text-zinc-800'>
        <img
          class='hover:cursor-pointer'
          src='https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg'
          alt='logo' />
        <h1
          class='text-black font-alata
        hover:bg-zinc-100 cursor-pointer 
        px-2 py-1 rounded-full
        transition-colors duration-300 ease-in-out'
          onClick={handleCarsClick}
        >Cars</h1>
        <h1
          class='text-black font-alata
        hover:bg-zinc-100 cursor-pointer 
        px-2 py-1 rounded-full
        transition-colors duration-300 ease-in-out'>E-Scooters</h1>
        <h1
          class='text-black font-alata
        hover:bg-zinc-100 cursor-pointer 
        px-2 py-1 rounded-full
        transition-colors duration-300 ease-in-out'>Battery & Charging stations</h1>
        <h1
          class='text-black font-alata
        hover:bg-zinc-100 cursor-pointer 
        px-2 py-1 rounded-full
        transition-colors duration-300 ease-in-out'
          onClick={handleAboutUsClick}
        >About us</h1>
      </div>
      {(isCarsClicked) && (
        <Cars />
      ) || (isEcootersClicked) && (
        <div>
          Ecooters
        </div>
      ) || (isLocationsClicked) && (
        <div>
          Locations
        </div>
      ) || (isAboutUsClicked) && (
        <AboutUs />
      )}

    </div>
  )
}
