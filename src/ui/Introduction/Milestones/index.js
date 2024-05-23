import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Milestones() {
    return (
        <div className='flex flex-1 relative bg-zinc-50 flex-col items-center justify-center min-h-screen'>
            <div className='mb-8 pb-4 border-b-4 border-black'>
                <h1 className='font-alata text-4xl font-bold text-zinc-800'>
                    Major Milestones
                </h1>
            </div>
            <div className='relative flex flex-row space-x-8 mx-8'>
                <ScrollAnimation className='flex flex-1' animateIn='zoomIn' animateOut='zoomOut'>
                    <div className='bg-white bg-opacity-80 p-4 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:cursor-default flex-1'>
                        <h1 className='font-alata text-2xl text-zinc-800 mb-3'>PHASE 1: Foundation</h1>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2017</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Establishment of VinFast automotive manufacturing complex.
                        </p>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2018</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Official launch of Lux models at Paris Motor Show, awarded "A Star Is Born" by AutoBest
                        </p>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2019</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Official launches of 3 models (VinFast Lux SA2.0, VinFast Lux A2.0 and VinFast Fadil) & 3 e-scooters (Ludo, Impes, Klara) in Vietnam market
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className='flex flex-1' animateIn='zoomIn' animateOut='zoomOut'>
                    <div className='bg-white bg-opacity-80 p-4 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:cursor-default flex-1'>
                        <h1 className='font-alata text-2xl text-zinc-800 mb-3'>PHASE 2: Acceleration</h1>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2020</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            VinFast became the best-seller in all 3 segments in Vietnam.
                        </p>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2021</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Launch of 3 brand-new smart EVs (VF e34, VF 8, VF 9), 2 new e-scooters (Theon & Feliz) and E-Bus.
                        </p>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Launch of new unique AR/VR experience and pre-order for VF 8, VF 9 in key markets.
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className='flex flex-1' animateIn='zoomIn' animateOut='zoomOut'>
                    <div className='bg-white bg-opacity-80 p-4 rounded-md shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:cursor-default flex-1'>
                        <h1 className='font-alata text-2xl text-zinc-800 mb-3'>PHASE 3: Global Expansion</h1>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2022</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Global pre-order and delivery of VF 8 and VF 9
                        </p>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Launches of VinFast's global showrooms in key markets
                        </p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation className='flex flex-1' animateIn='zoomIn' animateOut='zoomOut'>
                    <div className='bg-white bg-opacity-80 p-4 rounded-md shadow-lg transform transition duraton-300 ease-in-out hover:scale-110 hover:cursor-default flex-1'>
                        <h1 className='font-alata text-2xl text-zinc-800 mb-3'>PHASE 4: Innovation</h1>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>2023</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            Launching VF 5, VF 6, VF 9
                        </p>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>July 2023</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            North Carolina Plant - Groundbreaking
                        </p>
                        <h1 className='font-alata text-lg font-bold text-sky-700'>August 2023</h1>
                        <p className='font-alata text-lg font-light text-zinc-600'>
                            VinFast listed on the Nasdaq under ticker "VFS"
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
