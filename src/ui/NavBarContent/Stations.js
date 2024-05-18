import React from 'react'

export default function Stations() {
    const [loaded, setLoaded] = React.useState(false);
    const [visibility, setVisibility] = React.useState({
        evs: false,
        escooters: false
    });

    React.useEffect(() => {
        setLoaded(true);
        console.log('Cars loaded');

        const timeouts = [
            setTimeout(() => setVisibility((prev) => ({ ...prev, evs: true })), 200),
            setTimeout(() => setVisibility((prev) => ({ ...prev, escooters: true })), 300)
        ];

        return () => timeouts.forEach(clearTimeout);
    }, []);
    return (
        <div className={`absolute z-10 px-20 bg-white w-full ${loaded ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-700 ease-out`}>
            <div className='flex justify-center pb-4 pt-4 font-alata bg-white text-zinc-800'>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.evs ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[160px] max-h-[160px]' src='https://storage.googleapis.com/vinfast-data-01/pin-o-to_1657015096.png' />
                    <h1 className='mt-2'>For EVs</h1>
                </div>
                <div className='mx-6'></div>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.escooters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[160px] max-h-[160px]' src='https://storage.googleapis.com/vinfast-data-01/pin-xe-dien_1657015108.png' />
                    <h1 className='mt-2'>For E-Scooters</h1>
                </div>
            </div>
        </div>
    )
}
