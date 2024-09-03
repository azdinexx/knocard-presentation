'use client'
import React from 'react'
import FullscreenVideoSlider from '../section/[section]/FullscreenVideoSlider'
import { useState } from 'react'


function Page() {
    const [index, setIndex] = useState(0)
    const [fullscreen, setFullscreen] = useState(false)

    return (
        <>
            <button onClick={() => setFullscreen(true)}>Open Fullscreen</button>
            {fullscreen && (
                <FullscreenVideoSlider
                    videos={['/videos/video1.mp4', '/videos/video1.mp4', '/videos/video1.mp4']}
                    index={index}
                    setIndex={setIndex}
                    setFullscreen={setFullscreen}
                />
            )}
        </>
    )
}

export default Page