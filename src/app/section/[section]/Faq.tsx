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
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-1/2 p-4 overflow-y-auto">
            {faqData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={false}
                    className="mb-4 rounded-md overflow-hidden bg-blue-400/70 text-white"
                >
                    <motion.button
                        className="w-full text-left font-semibold p-4 hover:bg-blue-400/70"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {item.q}
                    </motion.button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className=''
                            >
                                <p className="px-8 py-4">{item.a}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default FAQ;