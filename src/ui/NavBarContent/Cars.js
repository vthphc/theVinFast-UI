import React from 'react';

export default function Cars() {
  const [loaded, setLoaded] = React.useState(false);
  const [visibility, setVisibility] = React.useState({
    vinfastVF3: false,
    vinfastVF5Plus: false,
    vinfastVF6: false,
    vinfastVFe34: false,
    vinfastVF7: false,
    vinfastVF8: false,
    vinfastVF9: false
  });

  React.useEffect(() => {
    setLoaded(true);
    console.log('Cars loaded');

    const timeouts = [
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVF3: true })), 200),
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVF5Plus: true })), 300),
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVF6: true })), 400),
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVFe34: true })), 500),
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVF7: true })), 600),
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVF8: true })), 700),
      setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVF9: true })), 800)
    ];

    return () => {
      timeouts.forEach(clearTimeout);
      setLoaded(false);
    };
  }, []);

  return (
    <div className={`absolute z-10 mt-12 w-full ${loaded ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-700 ease-out`}>
      <div className='flex justify-around px-20 pb-4 pt-4 font-alata bg-white text-zinc-800'>
        {[
          { key: 'vinfastVF3', src: 'https://storage.googleapis.com/vinfast-data-01/vf3-thumb-hover_1715586869.png', title: 'Vinfast VF3' },
          { key: 'vinfastVF5Plus', src: 'https://storage.googleapis.com/vinfast-data-01/VF5-hover_1711360072.png', title: 'Vinfast VF5 Plus' },
          { key: 'vinfastVF6', src: 'https://storage.googleapis.com/vinfast-data-01/VF6-hover_1711360098.png', title: 'Vinfast VF6' },
          { key: 'vinfastVFe34', src: 'https://storage.googleapis.com/vinfast-data-01/VFe34-hover_1711360133.png', title: 'Vinfast VFe34' },
          { key: 'vinfastVF7', src: 'https://storage.googleapis.com/vinfast-data-01/VF7-hover_1711360198.png', title: 'Vinfast VF7' },
          { key: 'vinfastVF8', src: 'https://storage.googleapis.com/vinfast-data-01/VF8-hover_1711360224.png', title: 'Vinfast VF8' },
          { key: 'vinfastVF9', src: 'https://storage.googleapis.com/vinfast-data-01/VF9-hover_1711360256.png', title: 'Vinfast VF9' }
        ].map(car => (
          <div
            key={car.key}
            className={`flex flex-col justify-center items-center px-2 pt-2
            hover:bg-zinc-100 rounded-2xl cursor-pointer
            transition-opacity duration-700 ease-in-out transform
            ${visibility[car.key] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <img src={car.src} alt={car.title} />
            <h1>{car.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
