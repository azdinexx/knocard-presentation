'use client'
import React from 'react';
import { Reporting } from '@/components/icons/reporting';
import { TeamsAndGroups } from '@/components/icons/team-and-groups';
import { Share } from '@/components/icons/share';
import { Media } from '@/components/icons/media';
import { Social } from '@/components/icons/social';
import { FeedbackForms } from '@/components/icons/feedback_forms';
import { Referrals } from '@/components/icons/referrals';
import { ScanBusinessCard } from '@/components/icons/scan_business_card';
import { AddNewPropspects } from '@/components/icons/add_new_prospect';
import { Messaging } from '@/components/icons/messaging';
import { KnocardLink } from '@/components/icons/knocard_link';
import { Pipeline } from '@/components/icons/pipeline';

const Header = ({ section, color }: { section: string, color: string }) => {


    return (
        <header className="flex justify-center items-center gap-2 sm:gap-3 p-2 sm:p-4">
            <Icon color={color} section={section} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-[500] capitalize text-center"
                style={{
                    color: color
                }}
            >{section}</h1>
        </header>
    );
}


export default Header;


export function Icon({ section, color, className }: { section: string, color: string, className: string }) {
    switch (section) {
        case 'Reporting':
            return <Reporting className={className + " fill-white group-hover:fill-[#00BAF2]"}

            />
            break
        case 'Team & Groups':
            return <TeamsAndGroups className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Share':
            return <Share className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Media':
            return <Media className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Social':
            return <Social className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Feedback Forms':
            return <FeedbackForms className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Referrals':
            return <Referrals className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Scan Business Card':
            return <ScanBusinessCard className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Add New Prospect':
            return <AddNewPropspects className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Messaging':
            return <Messaging className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'KnoCard Link':
            return <KnocardLink className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
        case 'Pipeline':
            return <Pipeline className={className + " fill-white group-hover:fill-[#00BAF2]"}
            />
            break
    }
}