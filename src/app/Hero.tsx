'use client'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ControlScrolling from "@/components/ControlScrolling";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const circleRadius = Math.min(
        windowSize.width < 744 ? 150 : windowSize.width < 1024 ? 250 : 320,
        windowSize.height * 0.355
    );

    const isIpadRotated = windowSize.width === 744 && windowSize.height === 1059;

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-neutral-50 w-screen h-screen flex justify-center items-center pb-44 md:pb-32 bg-[url('/bg/messaging.svg')] "
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-no-repeat bg-center bg-contain w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] relative transition-all duration-300"
            >
                <AnimatePresence>
                    <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[170px] lg:w-[200px] hidden md:block ${isIpadRotated ? 'md:w-[120px]' : ''}`}
                    >
                        <Image
                            src={selectedImage || '/phone.png'}
                            alt="Selected feature"
                            layout="responsive"
                            width={200}
                            height={200}
                        />
                    </motion.div>
                </AnimatePresence>
                {list.map((item, i) => (
                    <motion.button
                        initial={{
                            opacity: 0,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            opacity: 1,
                            top: `calc(50% + ${circleRadius}px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                            left: `calc(50% + ${circleRadius}px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                        }}
                        transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                        key={i}
                        className="absolute flex flex-col items-center justify-center hover:bg-neutral-100/50 rounded-xl p-1 md:p-2"
                        style={{
                            top: `calc(50% + ${circleRadius}px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                            left: `calc(50% + ${circleRadius}px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        onMouseEnter={() => setSelectedImage(item.icon)}
                        onMouseLeave={() => setSelectedImage(null)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href={item.href} className="flex flex-col items-center justify-center">
                            <motion.div
                                className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 overflow-hidden flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={windowSize.width < 768 ? 70 : windowSize.width < 1024 ? 90 : 100}
                                    height={windowSize.width < 768 ? 70 : windowSize.width < 1024 ? 90 : 100}
                                    className="overflow-hidden"
                                />
                            </motion.div>
                            <motion.p
                                className="text-center text-[11px] sm:text-xs md:text-sm font-medium max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-40"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                            >
                                {item.title}
                            </motion.p>
                        </Link>
                    </motion.button>
                ))}
            </motion.div>
            <ControlScrolling />
        </motion.main>
    );
}

const list = [
    {
        id: 'media',
        title: 'Media',
        icon: '/icones/media.svg',
        href: '/section/media',
    }, {
        id: 'social',
        title: 'Social',
        icon: '/icones/social.svg',
        href: '/section/social',
    }, {
        id: 'feedback_forms',
        title: 'Feedback Forms',
        icon: '/icones/feedback_forms.svg',
        href: '/section/feedback_forms',
    }, {
        id: 'referrals',
        title: 'Referrals',
        icon: '/icones/referrals.svg',
        href: '/section/referrals',
    }, {
        id: 'scan_business_card',
        title: 'Scan Business Card',
        icon: '/icones/scan_business_card.svg',
        href: '/section/scan_business_card',
    }, {
        id: 'add_new_prospect',
        title: 'Add New Prospect',
        icon: '/icones/add_new_prospect.svg',
        href: '/section/add_new_prospect',
    }, {
        id: 'share',
        title: 'Share',
        icon: '/icones/share.svg',
        href: '/section/share',
    }, {
        id: 'team-and-groups',
        title: 'Team & Groups',
        icon: '/icones/team_&_groups.svg',
        href: '/section/team-and-groups',
    }, {
        id: 'messaging',
        title: 'Messaging',
        icon: '/icones/messaging.svg',
        href: '/section/messaging',
    }, {
        id: 'knocard_link',
        title: 'KnoCard Link',
        icon: '/icones/knocard_link.svg',
        href: '/section/knocard_link',
    }, {
        id: 'reporting',
        title: 'Reporting',
        icon: '/icones/reporting.svg',
        href: '/section/reporting',
    }, {
        id: 'pipeline',
        title: 'Pipeline',
        icon: '/icones/pipeline.svg',
        href: '/section/pipeline',
    }
]