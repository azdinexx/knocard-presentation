import React from 'react'
import Header from './Header'
import FAQ from './Faq'
import ImageSlider from './ImageSlider'
import Navbar from './NavBar'
import { content } from '../content'

function page({ params }: { params: { section: string } }) {

    const data = content.find((item) => item.id === 'messaging')
    return (
        <div className="flex flex-col h-screen bg-[url('/bg/1.svg')] bg-cover">
            <Header
                section={data?.title || ''}
            />
            <main className="flex-grow flex max-w-screen-lg mx-auto w-full">
                {
                    data?.faq && <FAQ faqData={data.faq} />
                }
                <ImageSlider />
            </main>
            <Navbar />
        </div>
    )
}

export default page