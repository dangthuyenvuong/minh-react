import React from 'react'
import Banner from './components/Banner'
import Course from './components/Course'
import Special from './components/Special'
import Review from './components/Review'
import Gallery from './components/Gallery'
import CallToAction from './components/CallToAction'

export default function Home() {
    return (
        <main className="homepage" id="main">
            <Banner />
            <Course />
            <Special />
            <Review />
            <Gallery />
            <CallToAction />
        </main>

    )
}
