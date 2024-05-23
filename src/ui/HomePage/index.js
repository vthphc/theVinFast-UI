import React from 'react'
import Latest1 from '../Latest/Latest1'
import Latest2 from '../Latest/Latest2'
import Latest3 from '../Latest/Latest3'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function HomePage() {
    return (
        <div class='flex flex-col h-full'>
            <NavBar />
            <Latest1 />
            <Latest2 />
            <Latest3 />
            <Footer />
        </div>
    )
}
