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
        <header className=" flex justify-center items-center gap-3  ">
            <Icon color={color} section={section} />
            <h1 className="text-[40px] font-[500] capitalize text-center"
                style={{
                    color: color
                }}
            >{section}</h1>
        </header>
    );
}


export default Header;


function Icon({ section, color }: { section: string, color: string }) {
    switch (section.toLowerCase().replaceAll(' ', '_')) {
        case 'reporting':
            return <Reporting className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }}
            />
            break
        case 'teams_&_groups':
            return <TeamsAndGroups className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'share':
            return <Share className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'media':
            return <Media className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'social':
            return <Social className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'feedback_forms':
            return <FeedbackForms className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'referrals':
            return <Referrals className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'scan_business_card':
            return <ScanBusinessCard className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'add_new_prospect':
            return <AddNewPropspects className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'messaging':
            return <Messaging className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
        case 'knocard_link':
            return <KnocardLink className='w-[44px] h-[44px]'
                style={{
                    fill: color
                }} />
            break
    }
}