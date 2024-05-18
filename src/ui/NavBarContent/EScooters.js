import React from 'react'

export default function EScooters() {
    const [loaded, setLoaded] = React.useState(false);
    const [visibility, setVisibility] = React.useState({
        vinfastEvo200: false,
        vinfastVentoS: false,
        vinfastKlaraS: false,
        vinfastTheons: false,
        vinfastFelizS: false
    });

    React.useEffect(() => {
        setLoaded(true);
        console.log('Cars loaded');

        const timeouts = [
            setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastEvo200: true })), 200),
            setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastVentoS: true })), 300),
            setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastKlaraS: true })), 400),
            setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastTheons: true })), 500),
            setTimeout(() => setVisibility((prev) => ({ ...prev, vinfastFelizS: true })), 600)
        ];

        return () => timeouts.forEach(clearTimeout);
    }, []);
    return (
        <div className={`absolute z-10 px-20 bg-white w-full ${loaded ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-700 ease-out`}>
            <div className='flex justify-around px-56 pb-4 pt-4 font-alata bg-white text-zinc-800'>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.vinfastEvo200 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[130px] max-h-[130px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw200a9f8c/images/PDP-XMD/evo200-lite/img-evo-red.webp' />
                    <h1 className='mt-2'>VinFast Evo200</h1>
                </div>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.vinfastVentoS ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc9ae36fc/images/PDP-XMD/ventos/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Vento S</h1>
                </div>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.vinfastKlaraS ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4174f7b9/images/PDP-XMD/klaras/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Klara S</h1>
                </div>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.vinfastTheons ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw88f6dc99/images/PDP-XMD/theons/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Theon S</h1>
                </div>
                <div className={`flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-opacity duration-700 ease-in-out transform
                    ${visibility.vinfastFelizS ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwdb0aabe4/images/PDP-XMD/felizs/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Feliz S</h1>
                </div>
            </div>
        </div>
    )
}
