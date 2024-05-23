import React from 'react'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'

export default function Latest3() {
    return (
        <div className='flex flex-1 relative'>
            <div class="max-h-screen w-[1824px] overflow-hidden">
                <img
                    src="https://vinfastauto.us/themes/custom/vinfast_v2/images/v3/vf-7/technology-slide1.webp"
                    alt="vf6"
                >
                </img>
            </div>
            <h1
                className='text-zinc-700 font-bold text-4xl font-montserrat
                absolute inset-0 flex justify-end mr-6 mt-4'>VinFast VF7 - asymmetric universe design.</h1>
            <div className='absolute inset-0 flex justify-end items-end mb-10 mr-6'>
                <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
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
                </ScrollAnimation>
            </div>
        </div>
    )
}
