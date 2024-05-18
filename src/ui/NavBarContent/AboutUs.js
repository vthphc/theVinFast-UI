import React from 'react';

export default function AboutUs() {
    const [loaded, setLoaded] = React.useState(false);
    const [visibility, setVisibility] = React.useState({
        vision: false,
        mission: false,
        philosophy: false,
        coreValues: false
    });

    React.useEffect(() => {
        setLoaded(true);
        console.log('Content loaded');

        const timeouts = [
            setTimeout(() => setVisibility((prev) => ({ ...prev, vision: true })), 200),
            setTimeout(() => setVisibility((prev) => ({ ...prev, mission: true })), 300),
            setTimeout(() => setVisibility((prev) => ({ ...prev, philosophy: true })), 400),
            setTimeout(() => setVisibility((prev) => ({ ...prev, coreValues: true })), 500)
        ];

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className={`absolute z-10 mt-12 pt-3 px-20 bg-white pb-4 w-full ${loaded ? 'translate-y-0' : '-translate-y-4'} transition-transform duration-700 ease-out`}>
            <h1 className='font-alata font-bold text-zinc-800'>VinFast</h1>
            <p className='font-alata font-light text-zinc-600 mb-4'>
                Part of Vingroup, is Vietnam's first electric vehicle brand.
                Known for its customer-centric approach and innovation,
                VinFast quickly established a global presence with models like VF 8, VF 9, and VF e34.
                Committed to a green future, the company has received multiple awards and is listed on Nasdaq.
            </p>
            <div className='flex flex-row justify-between mb-2'>
                <div className={`flex flex-col transition-opacity duration-700 ease-in-out transform ${visibility.vision ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <h1 className='font-alata font-bold text-zinc-800'>Our Vision</h1>
                    <p className='font-alata font-light text-zinc-600'>
                        To become an intelligent electric vehicle brand that strongly promotes
                        the global electric vehicle revolution.
                    </p>
                </div>
                <div className={`flex flex-col transition-opacity duration-700 ease-in-out transform ${visibility.mission ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <h1 className='font-alata font-bold text-zinc-800'>Our Mission</h1>
                    <p className='font-alata font-light text-zinc-600'>
                        For a green future for everyone.
                    </p>
                </div>
                <div className={`flex flex-col ml-3 transition-opacity duration-700 ease-in-out transform ${visibility.philosophy ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <h1 className='font-alata font-bold text-zinc-800'>Our Philosophy</h1>
                    <p className='font-alata font-light text-zinc-600'>
                        Customer-centric, VinFast continuously innovates to create high-class products and
                        excellent experiences for everyone.
                    </p>
                </div>
                <div className={`flex flex-col transition-opacity duration-700 ease-in-out transform ${visibility.coreValues ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <h1 className='font-alata font-bold text-zinc-800'>Our Core Values</h1>
                    <p className='font-alata font-light text-zinc-600'>
                        High-class products, good prices, superior after-sales service.
                    </p>
                </div>
            </div>
            <a className='flex justify-end mt-4' href='https://vinfastauto.com/vn_vi/ve-chung-toi'>
                <button
                    className='bg-zinc-800 text-white font-alata
                    px-4 py-1 rounded-full hover:bg-zinc-700'>
                    Learn more
                </button>
            </a>
        </div>
    );
}
