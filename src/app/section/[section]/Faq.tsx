'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
    q: string;
    a: string[];
};

const FAQ: React.FC<{ faqData: FAQItem[] }> = ({
    faqData
}: {
    faqData: FAQItem[]
}) => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="w-full overflow-y-auto">
            {faqData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={false}
                    className="mb-2 rounded-md overflow-hidden bg-[#007CB480] text-white"
                >
                    <motion.button
                        className="w-full text-left font-semibold p-2 md:p-4 md:pb-0"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExpandedIndex(index)}
                    >
                        {item.q}
                    </motion.button>
                    <AnimatePresence>
                        {(!isMobile || index === 0 || expandedIndex === index) && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className=''
                            >
                                <p className="px-8 py-4 text-[#EEEEEE]">{item.a}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default FAQ;