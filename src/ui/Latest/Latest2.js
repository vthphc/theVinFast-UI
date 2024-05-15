import React from 'react'

export default function Latest2() {
    return (
        <div className='flex flex-1 relative'>
            <div class="h-full w-[1824px] overflow-hidden">
                <img
                    src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw6d4c0b92/reserves/VF6/VF6-Lifestyle-01.jpg"
                    alt="vf6">
                </img>
            </div>
            <h1
                className='text-slate-100 font-medium text-4xl font-montserrat
                absolute inset-0 flex justify-end mr-6 mt-4'>Vinfast VF6 - the superior performance.</h1>
            <div className='absolute inset-0 flex justify-end items-start mt-20 mr-6'>
                <button
                    className='h-14 py-3 px-6 mr-4 rounded-3xl bg-zinc-700 
                text-white text-xl font-alata
                hover:bg-zinc-800
                transition-colors duration-300 ease-in-out'>
                    Learn More
                </button>
                <button
                    className='h-14 py-3 px-6 rounded-3xl bg-slate-100 
                text-zinc-700 text-xl font-alata
                hover:bg-zinc-800 hover:text-white hover:border-zinc-800
                transition-colors duration-300 ease-in-out'>
                    Order Now
                </button>
            </div>
        </div>
    )
}
