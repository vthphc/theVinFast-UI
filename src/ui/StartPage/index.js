import React from 'react'
import { Link } from 'react-router-dom'

export default function StartPage() {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className='flex flex-1 relative flex-col items-center justify-center min-h-screen'>
            <div className='relative w-full h-full'>
                <img className='w-full max-h-screen object-cover' src='https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/10/7d316382e3199b28dbece66bcf2d3ccd/vinfast_sedan_-_front_34.jpg' alt='VinFast' />
                <div className={`absolute transition-opacity duration-700 ease-in-out transform inset-0 flex flex-row mt-6 items-start justify-center ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <img className='mr-4' src='https://vinfastauto.com/en/frontend/images/dynamic/logo-footer.svg' />
                    <h1 className='font-alata text-7xl ml-4 text-zinc-200 text-center'>THE VIETNAMESE TRAILBLAZER</h1>
                </div>
                <div className={`absolute transition-opacity duration-700 ease-in-out transform inset-0 flex flex-row mb-10 items-end px-44 justify-between ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <Link to='/introduction' >
                        <button
                            className={`h-14 w-64 py-3 px-6 mr-4 rounded-3xl bg-zinc-700 
                text-white text-xl font-semibold font-alata
                hover:bg-zinc-800
                transition-colors duration-300 ease-in-out`}>
                            ABOUT US
                        </button>
                    </Link>
                    <Link to='/products'>
                        <button
                            className={`h-14 w-64 py-3 px-6 rounded-3xl bg-slate-100  
                text-zinc-700 text-xl font-semibold font-alata
                hover:bg-zinc-800 hover:text-white
                transition-colors duration-300 ease-in-out`}
                        >
                            PRODUCTS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
