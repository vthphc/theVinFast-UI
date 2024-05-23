import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function FAQs() {
    return (
        <div className='flex flex-1 relative bg-zinc-50 pb-16 flex-col items-center justify-center min-h-screen' style={{ height: '100vh' }}>
            <div className='mb-8'>
                <h1 className='font-alata text-4xl font-bold text-zinc-800'>
                    Charging & Battery FAQs
                </h1>
            </div>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' className='flex flex-row justify-around' style={{ height: 'calc(100vh - 12rem)' }}>
                <div className='flex flex-col relative'>
                    <img className='pb-1 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 hover:cursor-default' src='https://api.vinfastauto3s.vn/wp-content/uploads/2024/01/pin-oto1.webp' alt='pin-oto' style={{ height: '50%' }} />
                    <p className='font-alata text-lg py-1 text-zinc-700 flex self-center'>For EVs</p>
                    <img className='pt-1 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 hover:cursor-default' src='https://api.vinfastauto3s.vn/wp-content/uploads/2024/01/pin-xe-may1.webp' alt='pin-xe-may' style={{ height: '50%' }} />
                    <p className='font-alata text-lg pt-1 text-zinc-700 flex self-center'>For E-Scooters</p>
                </div>
                <div className='flex flex-col relative'>
                    <img className='transform transition duration-300 ease-in-out hover:scale-105 hover:cursor-default' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-vinfast_vn_master/default/dwa0be0ad5/images/Accessory/CHG00009020/1.png' alt='sac' style={{ height: '100%' }} />
                    <p className='font-alata text-2xl pt-1 text-zinc-700 flex self-start'>Mobile Charging Equipments</p>
                    <p className='font-alata pt-1 text-sky-700 flex self-end hover:underline cursor-pointer'>Learn More</p>
                </div>
            </ScrollAnimation>
        </div>
    )
}