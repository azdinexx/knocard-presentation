'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import ControlScrolling from "@/components/ControlScrolling";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

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

    const circleRadius = windowSize.width < 768 ? 150 : 320;

    return (
        <main className="relative bg-neutral-50 w-screen h-screen flex justify-center items-center pb-28">
            <div
                className="bg-[url('/knocard.svg')] bg-no-repeat bg-center bg-contain w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px] lg:w-[412px] lg:h-[412px] relative transition-all duration-300"
            >
                <Image
                    src={'/phone.png'}
                    alt="phone"
                    width={200}
                    height={200}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[220px] hidden md:block"
                />
                {list.map((item, i) => (
                    <motion.button
                        initial={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            top: `calc(50% + ${circleRadius}px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                            left: `calc(50% + ${circleRadius}px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                        }}
                        key={i}
                        className="absolute flex flex-col items-center justify-center hover:bg-neutral-100/50 rounded-xl md:p-2"
                        style={{
                            top: `calc(50% + ${circleRadius}px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                            left: `calc(50% + ${circleRadius}px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Link href={item.href} className="flex flex-col items-center justify-center">
                            <div className="w-10 h-10 md:w-40 md:h-20 overflow-hidden flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={windowSize.width < 768 ? 70 : 100}
                                    height={windowSize.width < 768 ? 70 : 100}
                                    className="overflow-hidden"
                                />
                            </div>
                            <p className="text-center text-xs md:text-sm font-medium max-w-20 md:max-w-40">{item.title}</p>
                        </Link>
                    </motion.button>
                ))}
            </div>
            <ControlScrolling />
        </main>
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
        id: 'team_&_groups',
        title: 'Team & Groups',
        icon: '/icones/team_&_groups.svg',
        href: '/section/team_&_groups',
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