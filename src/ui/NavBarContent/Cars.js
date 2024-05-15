import React from 'react'

export default function Cars() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
    console.log('Cars loaded');
  }, []);

  return (
    <div className={`absolute z-10 mt-12 w-full ${loaded ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-700 ease-out`}>
      <div className='flex justify-around px-20 pb-4 pt-4 font-alata bg-white text-zinc-800'>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/vf3-thumb-hover_1715586869.png' />
          <h1>Vinfast VF3</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/VF5-hover_1711360072.png' />
          <h1>Vinfast VF5 Plus</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/VF6-hover_1711360098.png' />
          <h1>Vinfast VF6</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/VFe34-hover_1711360133.png' />
          <h1>Vinfast VFe34</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/VF7-hover_1711360198.png' />
          <h1>Vinfast VF7</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/VF8-hover_1711360224.png' />
          <h1>Vinfast VF8</h1>
        </div>
        <div className='flex flex-col justify-center items-center px-2 pt-2
        hover:bg-zinc-100 rounded-2xl cursor-pointer
          transition-colors duration-300 ease-in-out'>
          <img src='https://storage.googleapis.com/vinfast-data-01/VF9-hover_1711360256.png' />
          <h1>Vinfast VF9</h1>
        </div>
      </div>
    </div>
  )
}
