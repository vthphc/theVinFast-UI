import React from 'react'

export default function EScooters() {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setLoaded(true);
        console.log('Cars loaded');
    }, []);
    return (
        <div className={`absolute z-10 px-20 bg-white w-full ${loaded ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-700 ease-out`}>
            <div className='flex justify-around px-20 pb-4 pt-4 font-alata bg-white text-zinc-800'>
                <div className='flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-colors duration-300 ease-in-out'>
                    <img className='overflow-hidden max-w-[130px] max-h-[130px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw200a9f8c/images/PDP-XMD/evo200-lite/img-evo-red.webp' />
                    <h1 className='mt-2'>VinFast Evo200</h1>
                </div>
                <div className='flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-colors duration-300 ease-in-out'>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc9ae36fc/images/PDP-XMD/ventos/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Vento S</h1>
                </div>
                <div className='flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-colors duration-300 ease-in-out'>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4174f7b9/images/PDP-XMD/klaras/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Klara S</h1>
                </div>
                <div className='flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-colors duration-300 ease-in-out'>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw88f6dc99/images/PDP-XMD/theons/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Vento S</h1>
                </div>
                <div className='flex flex-col justify-center items-center py-2 px-4
                    hover:bg-zinc-100 rounded-2xl cursor-pointer
                    transition-colors duration-300 ease-in-out'>
                    <img className='overflow-hidden max-w-[100px] max-h-[100px]' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwdb0aabe4/images/PDP-XMD/felizs/battery-tech.webp' />
                    <h1 className='mt-2'>VinFast Feliz S</h1>
                </div>
            </div>
        </div>
    )
}
