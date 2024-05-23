import React from 'react'

export default function Subscription() {
    return (
        <div className='flex flex-1 relative bg-zinc-50 flex-col'>
            <img src='https://vinfastauto.com/themes/porto/img/homepage-v2/join-the-charge.webp' alt='subscription-banner' />
            <h1
                className='text-zinc-50 font-bold text-2xl font-montserrat
                absolute inset-0 flex justify-center mt-8'>NEWSLETTER</h1>
            <p className='text-zinc-50 text-2xl font-montserrat
                absolute inset-0 flex justify-center mt-16' >
                <span className='text-zinc-50 text-lg font-montserrat'>Join the charge for latest updates</span>
            </p>
            <div className='absolute inset-0 flex flex-row justify-center items-center'>
                <input type='email' placeholder='Enter your email...' className='h-14 mr-2 py-3 px-6 rounded-3xl bg-white text-zinc-700 text-lg font-alata mt-24' />
                <button
                    className='h-14 ml-2 py-3 px-6 rounded-3xl bg-sky-500 text-white text-lg font-alata mt-24 hover:bg-sky-600
                    transition-colors duration-300 ease-in-out'>
                    Submit
                </button>
            </div>
        </div>
    )
}
