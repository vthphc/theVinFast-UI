import React from 'react'
import Lastest1 from '../Latest/Latest1'
import Lastest2 from '../Latest/Latest2'
import Latest3 from '../Latest/Latest3'

export default function HomePage() {
    return (
        <div class='flex flex-col h-full'>
            <Lastest1 />
            <Lastest2 />
            <Latest3 />
        </div>
    )
}
