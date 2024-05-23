import React, { useEffect, useRef } from 'react';
import Cars from '../NavBarContent/Cars';
import AboutUs from '../NavBarContent/AboutUs';
import EScooters from '../NavBarContent/EScooters';
import Stations from '../NavBarContent/Stations';

export default function NavBar() {
  const [isCarsClicked, setCarsIsClicked] = React.useState(false);
  const [isEScootersClicked, setEScootersIsClicked] = React.useState(false);
  const [isLocationsClicked, setLocationsIsClicked] = React.useState(false);
  const [isAboutUsClicked, setAboutUsIsClicked] = React.useState(false);
  const navRef = useRef(null);

  const handleCarsClick = () => {
    setCarsIsClicked(!isCarsClicked);
    setEScootersIsClicked(false);
    setLocationsIsClicked(false);
    setAboutUsIsClicked(false);
  }

  const handleEScootersClick = () => {
    setCarsIsClicked(false);
    setEScootersIsClicked(!isEScootersClicked);
    setLocationsIsClicked(false);
    setAboutUsIsClicked(false);
  }

  const handleLocationsClick = () => {
    setCarsIsClicked(false);
    setEScootersIsClicked(false);
    setLocationsIsClicked(!isLocationsClicked);
    setAboutUsIsClicked(false);
  }

  const handleAboutUsClick = () => {
    setCarsIsClicked(false);
    setEScootersIsClicked(false);
    setLocationsIsClicked(false);
    setAboutUsIsClicked(!isAboutUsClicked);
  }

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setCarsIsClicked(false);
      setEScootersIsClicked(false);
      setLocationsIsClicked(false);
      setAboutUsIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className='flex flex-col bg-white' ref={navRef}>
      <div className='flex flex-1 px-56 h-11 justify-around py-2 bg-white text-zinc-800'>
        <img
          className='hover:cursor-pointer'
          src='https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg'
          alt='logo'
        />
        <h1
          className='text-zinc-500 font-alata hover:bg-zinc-100 hover:text-zinc-700 cursor-pointer px-2 py-1 rounded-full transition-colors duration-300 ease-in-out'
          onClick={handleCarsClick}
        >
          Cars
        </h1>
        <h1
          className='text-zinc-500 font-alata hover:bg-zinc-100 hover:text-zinc-700 cursor-pointer px-2 py-1 rounded-full transition-colors duration-300 ease-in-out'
          onClick={handleEScootersClick}
        >
          E-Scooters
        </h1>
        <h1
          className='text-zinc-500 font-alata hover:bg-zinc-100 hover:text-zinc-700 cursor-pointer px-2 py-1 rounded-full transition-colors duration-300 ease-in-out'
          onClick={handleLocationsClick}
        >
          Battery & Charging stations
        </h1>
        <h1
          className='text-zinc-500 font-alata hover:bg-zinc-100 hover:text-zinc-700 cursor-pointer px-2 py-1 rounded-full transition-colors duration-300 ease-in-out'
          onClick={handleAboutUsClick}
        >
          About us
        </h1>
      </div>

      {(isCarsClicked && <Cars />) ||
        (isEScootersClicked && (
          <div>
            <EScooters />
          </div>
        )) ||
        (isLocationsClicked && (
          <div>
            <Stations />
          </div>
        )) ||
        (isAboutUsClicked && <AboutUs />)}
    </div>
  );
}
