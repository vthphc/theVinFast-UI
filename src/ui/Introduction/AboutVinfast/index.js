import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function AboutVinFast() {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className='flex flex-1 relative flex-col items-center justify-center min-h-screen'>
            <div className='relative w-full h-full'>
                <img className='w-full max-h-screen object-cover' src='https://static-images.vnncdn.net/files/publish/2023/5/26/vf-8-vf-9-281.jpg' alt='VinFast' />
                <div className={`absolute transition-opacity duration-700 ease-in-out transform inset-0 flex flex-col items-center justify-center bg-black bg-opacity-35 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} animateIn='fadeIn' animateOut='fadeOut'>
                    <h1 className='font-alata text-4xl font-bold text-white text-center'>THE GLOBAL INTELLIGENT</h1>
                    <h1 className='font-alata text-4xl font-bold text-white text-center'>MOBILITY COMPANY</h1>
                    <p className='font-alata max-w-6xl text-xl font-light text-white text-center'>
                        VinFast is a member of Vingroup - the largest private corporation in Vietnam. We have become the #1 car seller in all of our competing segments within just 21 months of launching in Vietnam and we will launch our smart EVs globally in 2022. Our thoughtful design focuses on seamless customer experience, highest safety standards, superior craftsmanship, and intelligent Infotainment with lifestyle personalization.
                    </p>
                </div>
            </div>
        </div>
    )
}
