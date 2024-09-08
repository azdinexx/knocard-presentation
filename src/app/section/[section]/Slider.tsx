'use client'

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import FullscreenImageSlider from './FullscreenImageSlider'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import FullscreenVideoSlider from './FullscreenVideoSlider'

function ImageSlider({ images, videos, section }: { images: number, videos: string[], section: string }) {
    const [imageIndex, setImageIndex] = useState(0)
    const [videoIndex, setVideoIndex] = useState(0)
    const [fullscreenVideo, setFullscreenVideo] = useState(false)
    const [fullscreenImage, setFullscreenImage] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const controls = useAnimation()
    const constraintsRef = useRef(null)

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth <= 768)
        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const handleDragEnd = (event: any, info: any) => {
        if (info.offset.x > 100 && videoIndex > 0) {
            setVideoIndex(videoIndex - 1)
        } else if (info.offset.x < -100 && videoIndex < videos.length - 1) {
            setVideoIndex(videoIndex + 1)
        }
        controls.start({ x: 0, opacity: 1 })
    }

    return (
        <>
            <motion.div
                className='w-full h-full flex flex-col justify-center gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className='w-full aspect-[4/3] bg-blue-300 rounded-lg relative overflow-hidden'
                    transition={{ type: "spring", stiffness: 300 }}
                    ref={constraintsRef}
                >

                    {videos.map((video, index) => (
                        <div key={index} className={`absolute inset-0 ${index === videoIndex ? 'block' : 'hidden'}`}>
                            <video
                                src={video}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => {
                                    setFullscreenVideo(true);
                                    setVideoIndex(index);
                                }}
                            />
                        </div>
                    ))}
                    {fullscreenVideo && (
                        <FullscreenVideoSlider
                            videos={videos}
                            index={videoIndex}
                            setIndex={setVideoIndex}
                            setFullscreen={setFullscreenVideo}
                        />
                    )}

                    <motion.div
                        className='absolute top-2 right-2 text-blue-500 shadow-sm border border-blue-500/20 bg-white/70 px-2 rounded-md'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {videoIndex + 1} of {videos.length}
                    </motion.div>

                    <motion.button
                        className='absolute bottom-2 left-2 bg-white/70 shadow-md border border-blue-500/20 rounded-md p-2'
                        data-tooltip-content="Fullscreen"
                        onClick={() => setFullscreenImage(!fullscreenImage)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.875 10.6349L20.5451 2.96484" stroke="#007CB4" strokeWidth="1.68367" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.2945 6.70659V2.2168H16.8047" stroke="#007CB4" strokeWidth="1.68367" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.0024 2.2168H9.1316C4.45473 2.2168 2.58398 4.08755 2.58398 8.76442V14.3767C2.58398 19.0535 4.45473 20.9243 9.1316 20.9243H14.7438C19.4207 20.9243 21.2915 19.0535 21.2915 14.3767V12.5059" stroke="#007CB4" strokeWidth="1.68367" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>

                </motion.div>
                <div className="flex gap-4 py-2 mx-auto">
                    {videos.map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{
                                backgroundColor: i === videoIndex ? '#007CB4' : 'white'
                            }}
                            initial={false}
                            animate={i === videoIndex ? { scale: 1.2 } : { scale: 1 }}
                        ></motion.div>
                    ))}
                </div>
                {
                    !isMobile && (
                        <Controls index={videoIndex} setIndex={setVideoIndex} media={videos} />
                    )
                }
                {(
                    <>
                        <motion.ul
                            className='flex gap-4 mx-6 '
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {
                                Array.from({ length: images }).map((_, i) => (

                                    <motion.li
                                        key={i}
                                        className="relative max-w-20 min-w-[105px] w-20 h-[105px] bg-[url('/iphone.png')] bg-contain bg-no-repeat bg-center cursor-pointer border flex-grow-0"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => {
                                            setFullscreenImage(true);
                                            setImageIndex(i);
                                        }}
                                    >
                                        <Image
                                            src={`/images/${section}/${i + 1}.png`}
                                            alt={`Image ${i + 1}`}
                                            width={100}
                                            height={100}
                                            className='absolute w-[76px] h-[96%] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

                                        />

                                    </motion.li>
                                ))
                            }
                        </motion.ul>
                    </>
                )}
            </motion.div>
            {fullscreenImage && (
                <FullscreenImageSlider setFullscreen={setFullscreenImage} images={images} index={imageIndex} setIndex={setImageIndex} section={section} />
            )}
        </>
    )
}

export default ImageSlider

function Controls({ index, setIndex, media }: { index: number, setIndex: (index: number) => void, media: string[] }) {
    return (
        <motion.div
            className='flex justify-center gap-10 mb-3'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
        >
            <motion.button
                onClick={() => setIndex(index - 1)}
                disabled={index === 0}
                className='disabled:opacity-50'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48 0.367188)" fill="white" />
                    <path d="M27.0904 33.0367C27.2804 33.0367 27.4704 32.9667 27.6204 32.8167C27.9104 32.5267 27.9104 32.0467 27.6204 31.7567L21.1004 25.2367C20.6204 24.7567 20.6204 23.9767 21.1004 23.4967L27.6204 16.9767C27.9104 16.6867 27.9104 16.2067 27.6204 15.9167C27.3304 15.6267 26.8504 15.6267 26.5604 15.9167L20.0404 22.4367C19.5304 22.9467 19.2404 23.6367 19.2404 24.3667C19.2404 25.0967 19.5204 25.7867 20.0404 26.2967L26.5604 32.8167C26.7104 32.9567 26.9004 33.0367 27.0904 33.0367Z" fill="#007CB4" />
                </svg>
            </motion.button>
            <motion.button
                onClick={() => setIndex(index + 1)}
                className='disabled:opacity-50'
                disabled={index === media.length - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.367188" width="48" height="48" rx="24" fill="white" />
                    <path d="M20.9096 33.0367C20.7196 33.0367 20.5296 32.9667 20.3796 32.8167C20.0896 32.5267 20.0896 32.0467 20.3796 31.7567L26.8996 25.2367C27.3796 24.7567 27.3796 23.9767 26.8996 23.4967L20.3796 16.9767C20.0896 16.6867 20.0896 16.2067 20.3796 15.9167C20.6696 15.6267 21.1496 15.6267 21.4396 15.9167L27.9596 22.4367C28.4696 22.9467 28.7596 23.6367 28.7596 24.3667C28.7596 25.0967 28.4796 25.7867 27.9596 26.2967L21.4396 32.8167C21.2896 32.9567 21.0996 33.0367 20.9096 33.0367Z" fill="#007CB4" />
                </svg>
            </motion.button>
        </motion.div>
    )
}
