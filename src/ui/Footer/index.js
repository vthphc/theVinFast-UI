import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col p-4 mb-4'>
            <img
                className='self-center pb-8 max-w-[400px] max-h-[180px] cursor-pointer'
                src='https://vinfastauto.com/themes/porto/img/homepage-v2/logo-footer-v2.svg'
                alt='logo' />
            <div className='flex content-center text-zinc-500 font-alata px-80 justify-around'>
                <a
                    href='https://vinfastauto.com/vn_vi/ve-chung-toi'
                    className='hover:text-zinc-900 transition-colors duration-500'
                >About VinFast</a>
                <a
                    href='https://vinfastauto.com/vn_vi/ve-vingroup'
                    className='hover:text-zinc-900 transition-colors duration-500'
                >About VinGroup</a>
                <a href='https://vinfastauto.com/vn_vi/cong-dong'
                    className='hover:text-zinc-900 transition-colors duration-500'
                >News</a>
                <a
                    href='https://vinfastauto.com/vn_vi/uu-dai'
                    className='hover:text-zinc-900 transition-colors duration-500'
                >Offers</a>
                <a
                    href='https://vinfastauto.com/vn_vi/tim-kiem-showroom-tram-sac'
                    className='hover:text-zinc-900 transition-colors duration-500'
                >Showrooms & Charging stations</a>
                <a
                    href='https://vinfastauto.com/vn_vi/dieu-khoan-phap-ly?collapseId=collapse-10'
                    className='hover:text-zinc-900 transition-colors duration-500'
                >Privacy</a>
            </div>
        </div>
    )
}
