'use client'
import React from 'react';
import { Reporting } from '@/components/icons/reporting';
import { TeamsAndGroups } from '@/components/icons/team_&_groups';
import { Share } from '@/components/icons/share';
import { Media } from '@/components/icons/media';
import { Social } from '@/components/icons/social';
import { FeedbackForms } from '@/components/icons/feedback_forms';
import { Referrals } from '@/components/icons/referrals';
import { ScanBusinessCard } from '@/components/icons/scan_business_card';
import { AddNewPropspects } from '@/components/icons/add_new_prospect';
import { Messaging } from '@/components/icons/messaging';
import { KnocardLink } from '@/components/icons/knocard_link';

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
    switch (section.toLowerCase().replaceAll(' ', '_')) {
        case 'reporting':
            return <Reporting className={className}
                style={{
                    fill: color
                }}
            />
            break
        case 'teams_&_groups':
            return <TeamsAndGroups className={className}
                style={{
                    fill: color
                }} />
            break
        case 'share':
            return <Share className={className}
                style={{
                    fill: color
                }} />
            break
        case 'media':
            return <Media className={className}
                style={{
                    fill: color
                }} />
            break
        case 'social':
            return <Social className={className}
                style={{
                    fill: color
                }} />
            break
        case 'feedback_forms':
            return <FeedbackForms className={className}
                style={{
                    fill: color
                }} />
            break
        case 'referrals':
            return <Referrals className={className}
                style={{
                    fill: color
                }} />
            break
        case 'scan_business_card':
            return <ScanBusinessCard className={className}
                style={{
                    fill: color
                }} />
            break
        case 'add_new_prospect':
            return <AddNewPropspects className={className}
                style={{
                    fill: color
                }} />
            break
        case 'messaging':
            return <Messaging className={className}
                style={{
                    fill: color
                }} />
            break
        case 'knocard_link':
            return <KnocardLink className={className}
                style={{
                    fill: color
                }} />
            break
    }
}