import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'

export default function More() {
    return (
        <div className='flex flex-1 relative bg-zinc-50 flex-col min-h-screen'>
            <img src='https://vinfastauto.us/themes/custom/vinfast_v2/images/v3/homepage/technology.webp' alt='background-evs' />
            <h1
                className='text-zinc-50 font-bold text-4xl font-montserrat
                absolute inset-0 flex justify-center mt-8'>More of VinFasts</h1>
            <div
                className={`absolute inset-0 flex justify-center mt-24`}>
                <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight'>
                    <button
                        className='h-14 py-3 px-6 mr-3 rounded-3xl bg-zinc-50 
                text-zinc-700 text-xl font-alata
                hover:bg-zinc-300
                transition-colors duration-300 ease-in-out'>
                        Order Now
                    </button>
                    <Link to='/products' >
                        <button
                            className='h-14 py-3 px-6 ml-3 rounded-3xl bg-sky-500 
                text-white text-xl font-alata
                hover:bg-sky-600
                transition-colors duration-300 ease-in-out'>
                            Check Out
                        </button></Link>
                </ScrollAnimation>
            </div>
        </div>
    )
}
