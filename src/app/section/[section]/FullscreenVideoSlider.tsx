'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ShareAndExit } from './FullscreenImageSlider'

interface FullscreenVideoSliderProps {
    videos: string[]
    index: number
    setIndex: (index: number) => void
    setFullscreen: (fullscreen: boolean) => void
}

function FullscreenVideoSlider({ videos, index, setIndex, setFullscreen }: FullscreenVideoSliderProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
    }, [isPlaying, index])

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 left-0 z-50 w-screen h-screen bg-black flex flex-col'
        >
            <main className="w-full h-full relative">
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='absolute top-10 left-10 text-white text-2xl font-bold z-20'
                >
                    {videos[index].split('/').pop()}
                </motion.p>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <video
                            ref={videoRef}
                            src={videos[index]}
                            className="w-full h-full object-cover"
                            onClick={handleVideoClick}
                            autoPlay={isPlaying}
                            controls={isPlaying}
                        />
                    </motion.div>
                </AnimatePresence>

                <ShareAndExit setFullscreen={setFullscreen} />

                <AnimatePresence>
                    {!isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-4 z-10"
                        >
                            <div className="flex justify-center space-x-4">
                                {videos.map((video, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-24 h-24 relative cursor-pointer rounded-lg overflow-hidden ${i === index ? 'border-2 border-white' : ''}`}
                                        onClick={() => setIndex(i)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <video
                                            src={video}
                                            preload="metadata"
                                            className="w-full h-full object-cover"
                                        >
                                            <source src={`${video}#t=0.1`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex space-x-2">
                                {videos.map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-500'}`}
                                        initial={false}
                                        animate={i === index ? { scale: 1.2 } : { scale: 1 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </motion.div>
    )
}

export default FullscreenVideoSlider