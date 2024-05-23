import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Products() {
    return (
        <div className='flex flex-1 pb-8 relative bg-zinc-50 flex-col min-h-screen'>
            <div className='mb-4 pb-4 self-center mt-8'>
                <h1 className='font-alata text-4xl font-bold text-zinc-800'>
                    Our Latest EVs Family
                </h1>
            </div>
            <div className='relative flex flex-col lg:flex-row mx-8 space-y-8 lg:space-y-0 lg:space-x-8'>
                <ScrollAnimation className='flex flex-col flex-1 bg-white bg-opacity-80 p-4 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:cursor-default' animateIn='fadeIn' animateOut='fadeOut'>
                    <img className='w-full h-auto rounded-md' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw6d52ff2a/images/PDP/vf9/img-top.webp' />
                    <div className='flex flex-1 mt-2'>
                        <div className=''>
                            <div className='flex flex-col justify-between'>
                                <h1 className='font-alata text-2xl font-semibold text-zinc-800 mb-0.5'>VinFast VF9</h1>
                                <h1 className='font-alata text-zinc-800 mb-3'>Starting at $84,200</h1>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='font-alata text-lg font-bold text-sky-700'>Range</h1>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        Up to 500km
                                    </p>
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='font-alata text-lg font-bold text-sky-700'>Wheelbase</h1>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        Targeting highest safety standards in the US and Europe
                                    </p>
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='font-alata text-lg font-bold text-sky-700'>Maximum power / torque</h1>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        300kW / 640Nm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className='flex flex-col flex-1 bg-white bg-opacity-80 p-4 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:cursor-default' animateIn='fadeIn' animateOut='fadeOut'>
                    <img className='w-full h-auto rounded-md' src='https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw35f37fbc/images/PDP/vf8/img-top.webp' />
                    <div className='flex flex-1 mt-2'>
                        <div className=''>
                            <div className='flex flex-col justify-between'>
                                <h1 className='font-alata text-2xl font-semibold text-zinc-800 mb-0.5'>VinFast VF8</h1>
                                <h1 className='font-alata text-zinc-800 mb-3'>Starting at $49,000</h1>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='font-alata text-lg font-bold text-sky-700'>Range</h1>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        Up to 550km
                                    </p>
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='font-alata text-lg font-bold text-sky-700'>Wheelbase</h1>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        Targeting highest safety standards in the US and Europe
                                    </p>
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <h1 className='font-alata text-lg font-bold text-sky-700'>Maximum power / torque</h1>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        300kW / 640Nm or
                                    </p>
                                    <p className='font-alata text-lg font-light text-zinc-600'>
                                        150kW / 320Nm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
