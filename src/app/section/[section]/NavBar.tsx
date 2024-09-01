'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Share from './icones/Share';
import Knocard from './icones/Knocard';
import Home from './icones/Home';

const Navbar: React.FC = () => {
    return (
        <nav className='fixed bottom-0 left-0 w-full p-4 '>
            <div className='flex justify-between items-center max-w-screen-lg mx-auto w-full'>

                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                    >
                        <Home />
                    </motion.button>
                </Link>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center"
                    onClick={() => {/* Add share functionality */ }}
                >
                    <Share />
                </motion.button>
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                    >
                        <Knocard />
                    </motion.div>
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;