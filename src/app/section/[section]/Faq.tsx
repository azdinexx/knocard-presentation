'use client'
import React, { useState } from 'react';
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
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [fullPopupIndex, setFullPopupIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(prevIndex => prevIndex === index ? null : index);
    };

    const openFullPopup = (index: number) => {
        setFullPopupIndex(index);
    };

    const closeFullPopup = () => {
        setFullPopupIndex(null);
    };

    return (
        <div className="w-full overflow-hidden">
            {faqData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={false}
                    className="mb-2 rounded-md overflow-hidden bg-[#007CB480] text-white"
                >
                    <motion.button
                        className="w-full text-left font-semibold p-2 md:p-4 flex justify-between items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleExpand(index)}
                    >
                        {item.q}
                        <svg
                            className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                            width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0003 6.50046C9.41693 6.50046 8.83359 6.72546 8.39193 7.16712L2.95859 12.6005C2.71693 12.8421 2.71693 13.2421 2.95859 13.4838C3.20026 13.7255 3.60026 13.7255 3.84193 13.4838L9.27526 8.05046C9.67526 7.65046 10.3253 7.65046 10.7253 8.05046L16.1586 13.4838C16.4003 13.7255 16.8003 13.7255 17.0419 13.4838C17.2836 13.2421 17.2836 12.8421 17.0419 12.6005L11.6086 7.16712C11.1669 6.72546 10.5836 6.50046 10.0003 6.50046Z" fill="white" />
                        </svg>
                    </motion.button>

                    <AnimatePresence>
                        {expandedIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:relative md:bg-transparent"
                            >
                                <motion.div
                                    className="bg-white text-black p-4 md:p-0 rounded-lg max-w-sm w-full mx-4 md:mx-0 md:bg-transparent md:text-white relative md:py-5 py-10"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <button
                                        className="absolute top-2 right-2 md:hidden bg-red-500 rounded-full p-[2px] "
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <h3 className="text-center font-semibold mb-4 md:hidden">{item.q}</h3>
                                    <ul className='list-disc list-outside pl-6 pr-2 md:pl-2 md:pr-2'>
                                        {item.a.map((paragraph, pIndex) => (
                                            <li key={pIndex} className="mb-2">{paragraph}</li>
                                        ))}
                                    </ul>
                                    <button
                                        className="hidden md:block mt-4 bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                        onClick={() => openFullPopup(index)}
                                    >
                                        View Full
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}

            <AnimatePresence>
                {fullPopupIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <motion.div
                            className="bg-white text-black p-6 rounded-lg max-w-2xl w-full mx-4 relative aspect-video"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">{faqData[fullPopupIndex].q}</h2>
                            <ul className='list-disc list-outside pl-6 pr-2'>
                                {faqData[fullPopupIndex].a.map((paragraph, pIndex) => (
                                    <li key={pIndex} className="mb-2">{paragraph}</li>
                                ))}
                            </ul>
                            <button
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
                                onClick={closeFullPopup}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;