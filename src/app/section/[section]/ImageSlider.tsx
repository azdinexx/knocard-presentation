'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import FullscreenImageSlider from './FullScreen'
import { motion, AnimatePresence } from 'framer-motion'

function ImageSlider({ images, video }: { images: string[], video: string }) {
    const [index, setIndex] = useState(0)
    const [fullscreen, setFullscreen] = useState(false)
    return (
        <>

            <motion.div
                className='w-full h-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className='w-full aspect-[4/3] bg-blue-300 rounded-lg relative'
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <AnimatePresence mode="wait">
                        {video && (
                            <motion.video
                                key="video"
                                src={video}
                                className='w-full h-full object-cover rounded-lg'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                        {!video && images.length > 0 && (
                            <motion.div
                                key={images[index]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={images[index]}
                                    alt={`Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className='absolute top-2 right-2 text-blue-500 shadow-sm border border-blue-500/20 bg-white/70 px-2 rounded-md'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {index + 1} of {images.length}
                    </motion.div>

                    <motion.button
                        className='absolute bottom-2 left-2 bg-white/70 shadow-md border border-blue-500/20 rounded-md p-2'
                        data-tooltip-content="Fullscreen"
                        onClick={() => setFullscreen(!fullscreen)}
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
                <motion.ul
                    className='grid grid-cols-3 gap-4 p-4'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {[
                        (index - 1 + images.length) % images.length,
                        index,
                        (index + 1) % images.length
                    ].map((i) => (
                        <motion.li
                            key={i}
                            className='aspect-square relative cursor-pointer'
                            onClick={() => setIndex(i)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={images[i]}
                                alt={`Image ${i + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </motion.li>
                    ))}
                </motion.ul>
                <Controls index={index} setIndex={setIndex} images={images} />
            </motion.div>
            {fullscreen && (
                <FullscreenImageSlider setFullscreen={setFullscreen} images={images} index={index} setIndex={setIndex} />
            )}
        </>
    )
}

export default ImageSlider

function Controls({ index, setIndex, images }: { index: number, setIndex: (index: number) => void, images: string[] }) {
    return (
        <motion.div
            className='flex justify-center gap-10'
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
                disabled={index === images.length - 1}
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
