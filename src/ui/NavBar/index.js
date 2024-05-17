import React from 'react'
import Cars from '../NavBarContent/Cars';
import AboutUs from '../NavBarContent/AboutUs';
import EScooters from '../NavBarContent/EScooters';
import Stations from '../NavBarContent/Stations';

export default function NavBar() {
  const [isCarsClicked, setCarsIsClicked] = React.useState(false);
  const [isEScootersClicked, setEScootersIsClicked] = React.useState(false);
  const [isLocationsClicked, setLocationsyIsClicked] = React.useState(false);
  const [isAboutUsClicked, setAboutUsIsClicked] = React.useState(false);

  const handleCarsClick = () => {
    setCarsIsClicked(!isCarsClicked);
    setEScootersIsClicked(false);
    setLocationsyIsClicked(false);
    setAboutUsIsClicked(false);
  }

  const handleEScootersClick = () => {
    setCarsIsClicked(false);
    setEScootersIsClicked(!isEScootersClicked);
    setLocationsyIsClicked(false);
    setAboutUsIsClicked(false);
  }

  const handleLocationsClick = () => {
    setCarsIsClicked(false);
    setEScootersIsClicked(false);
    setLocationsyIsClicked(!isLocationsClicked);
    setAboutUsIsClicked(false);
  }

  const handleAboutUsClick = () => {
    setCarsIsClicked(false);
    setEScootersIsClicked(false);
    setLocationsyIsClicked(false);
    setAboutUsIsClicked(!isAboutUsClicked);
  }

  return (
    <div class='flex flex-col bg-white'>
      <div class='flex flex-1 px-56 h-11 justify-around py-2 bg-white text-zinc-800'>
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
        transition-colors duration-300 ease-in-out'
          onClick={handleEScootersClick}
        >E-Scooters</h1>
        <h1
          class='text-black font-alata
        hover:bg-zinc-100 cursor-pointer 
        px-2 py-1 rounded-full
        transition-colors duration-300 ease-in-out'
          onClick={handleLocationsClick}
        >Battery & Charging stations</h1>
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
      ) || (isEScootersClicked) && (
        <div>
          <EScooters />
        </div>
      ) || (isLocationsClicked) && (
        <div>
          <Stations />
        </div>
      ) || (isAboutUsClicked) && (
        <AboutUs />
      )}

    </div>
  )
}
