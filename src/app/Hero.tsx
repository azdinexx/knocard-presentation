'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import ControlScrolling from "@/components/ControlScrolling";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="relative bg-neutral-50 w-screen h-screen flex justify-center items-center">
            <div
                className="bg-[url('/knocard.svg')] bg-no-repeat bg-center bg-contain w-[300px] h-[300px] md:w-[412px] md:h-[412px] relative transition-all duration-300"
            >
                <Image
                    src={'/phone.png'}
                    alt="phone"
                    width={220}
                    height={220}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[220px] "
                />
                {list.map((item, i) => (
                    <motion.button
                        initial={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            top: `calc(50% + 350px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                            left: `calc(50% + 350px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                        }}
                        key={i}
                        className="absolute flex flex-col items-center justify-center hover:bg-neutral-100 rounded-full p-2 "
                        style={{
                            top: `calc(50% + 350px * ${Math.sin((i * 2 * Math.PI) / 12)})`,
                            left: `calc(50% + 350px * ${Math.cos((i * 2 * Math.PI) / 12)})`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Link href={item.href}>
                            <div className=" w-40 h-20 overflow-hidden flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="  overflow-hidden"
                                />
                            </div>
                            <p className="text-center text-sm font-medium">{item.title}</p>
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
        id: 'messaging',
        title: 'Messaging',
        icon: '/icones/messaging.svg',
        href: '/section/messaging',
    },
    {
        id: 'knocard_link',
        title: 'KnoCard Link',
        icon: '/icones/knocard_link.svg',
        href: '/section/knocard_link',
    }, {
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