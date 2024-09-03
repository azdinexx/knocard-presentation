'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Share from './icones/Share';
import Knocard from './icones/Knocard';
import Home from './icones/Home';

const Navbar = ({
    color
}: {
    color: string
}) => {
    return (
        <nav className='fixed bottom-6 left-0 w-full  '>
            <div className='flex justify-between items-center max-w-screen-lg mx-auto w-full'>

                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                    >
                        <Home fill={color} width={60} height={60} />
                    </motion.button>
                </Link>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center"
                    onClick={() => {/* Add share functionality */ }}
                >
                    <Share fill={color} width={60} height={60} />
                </motion.button>
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                    >
                        <Knocard fill={color} width={60} height={60} />
                    </motion.div>
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;