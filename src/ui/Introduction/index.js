import React from 'react'
import AboutVinFast from './AboutVinfast'
import Milestones from './Milestones'
import Products from './Products'
import Footer from '../Footer'
import FAQs from './FAQs'
import More from './More'
import Subscription from './Subscription'

export default function Introduction() {
    return (
        <div>
            <AboutVinFast />
            <Milestones />
            <Products />
            <FAQs />
            <More />
            <Subscription />
            <Footer />
        </div>
    )
}
