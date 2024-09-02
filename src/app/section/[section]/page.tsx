import React from 'react'
import Header from './Header'
import FAQ from './Faq'
import ImageSlider from './ImageSlider'
import Navbar from './NavBar'

function Page({ params }: { params: { section: string } }) {


    const info = content.find((item) => item.id === params.section)

    if (!info) return null

    return (
        <div className={`flex flex-col h-screen `}
            style={{
                background: `url(${info.bg}) no-repeat center center fixed`,
                backgroundSize: 'cover'
            }}
        >
            <Header
                section={info?.title || ''}
            />
            <main className="max-w-screen-lg mx-auto w-full gap-10 grid grid-cols-2">
                <FAQ faqData={info.faq} />

                <ImageSlider />
            </main>
            <Navbar />
        </div>
    )
}

export default Page

const content = [
    {
        id: "messaging",
        title: "Messaging",
        icon: "/icones/messaging.svg",
        href: "/section/messaging",
        bg: "/bg/messaging.svg",
        faq: [
            {
                q: "What is the Messaging?",
                a: [
                    "In app messaging service",
                    "Group messaging enhances group communication and keeps teams unified.",
                ],
            },
            {
                q: "How does Messaging work?",
                a: [
                    "The messaging feature operates within the KnoCard Online platform, bypassing mobile carrier restrictions.",
                    "Notification alerts ensure that no message is overlooked.",
                    "Users can easily create and manage groups, with members having the option to remove themselves as needed.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike SMS-based services, this platform allows users to communicate seamlessly across international regions.",
                    "Messages can be sent and received on various devices, including mobile phones, desktops, and laptops.",
                ],
            },
        ],
    },
    {
        id: "knocard_link",
        title: "KnoCard Link",
        icon: "/icones/knocard_link.svg",
        href: "/section/knocard_link",
        bg: "/bg/knocard_link.svg",
        faq: [
            {
                q: "What is the KnoCard Link?",
                a: [
                    "An innovative coaching platform designed to empower team leaders by providing access to members’ reports, aiding in business growth.",
                ],
            },
            {
                q: "How does KnoCard Link work?",
                a: [
                    "Team leaders send a consent request to team members who have asked for guidance.",
                    "Once consent is granted, the leader’s dashboard displays detailed reports, offering a comprehensive view of the member’s sharing activities and results.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike other systems that leave leaders to coach without data, KnoCard Link provides crucial insights for effective team management.",
                    "The platform eliminates wasted time by ensuring leaders only assist team members actively working on their business, thanks to its accountability-based approach.",
                ],
            },
        ],
    },
    {
        id: "media",
        title: "Media",
        icon: "/icones/media.svg",
        href: "/section/media",
        bg: "/bg/media.svg",
        faq: [
            {
                q: "What is the Media?",
                a: [
                    "Photos, videos, PDF files are quickly and easily added to Media section",
                    "Files may be added individually or in groups",
                    "Organize and group similar media files by creating topics and adding relevant files to them",
                ],
            },
            {
                q: "How does Media work?",
                a: [
                    "KnoCard user adds media files from mobile device, laptop or desktop",
                    "Media files can be viewed either from the Media page of the KnoCard or by clicking on a dedicated link",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike other platforms, which don’t offer insights into viewer preferences, KnoCard allows media files to be sent with an attached feedback form",
                    "KnoCard’s media files are accessible via a link, requiring only an internet connection to view—no app download needed, unlike other platforms.",
                ],
            },
        ],
    },
    {
        id: "social",
        title: "Social",
        icon: "/icones/social.svg",
        href: "/section/social",
        bg: "/bg/social.svg",
        faq: [
            {
                q: "What is the Social?",
                a: [
                    "Business focused social media platform.",
                    "Provides source for users to share and receive information that is not clouded by distractions and chaos.",
                ],
            },
            {
                q: "How does Social work?",
                a: [
                    "Modeled after traditional social media platforms, KnoCard Social provides the ability to post content, videos, and photos - and to share and interact on the platform.",
                    "Non KnoCard users are offered a free, Social Only platform.",
                    "Team and Group leaders’ posts are served to all group members, providing an instantaneous communication tool.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Traditional social platforms were never intended for business purposes but have been used in lieu of lack of a better solution.",
                    "KnoCard Social IS the solution!",
                ],
            },
        ],
    },
    {
        id: "feedback_forms",
        title: "Feedback Forms",
        icon: "/icones/feedback_forms.svg",
        href: "/section/feedback_forms",
        bg: "/bg/feedback_forms.svg",
        faq: [
            {
                q: "What are the Feedback Forms?",
                a: [
                    "Attached to media files that are shared with prospects.",
                    "Provides valuable insight to guide follow up.",
                ],
            },
            {
                q: "How do Feedback Forms work?",
                a: [
                    "User may attach a default questionnaire or create a custom form.",
                    "Form is displayed to recipient after media is viewed.",
                    "Feedback results are reported to KnoCard user.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Eliminates rejection by eliminating awkward follow up conversations.",
                    "With a clear understanding of the recipients’ likes, dislikes, and interests, KnoCard user is able to identify which prospects are hot or cold, and steer follow up conversations based on viewers’ interests.",
                ],
            },
        ],
    },
    {
        id: "referrals",
        title: "Referrals",
        icon: "/icones/referrals.svg",
        href: "/section/referrals",
        bg: "/bg/referrals.svg",
        faq: [
            {
                q: "What are the Referrals?",
                a: [
                    "Revolutionary tool promotes simple, effective sharing of referrals",
                    "Text based; send a referral in seconds.",
                ],
            },
            {
                q: "How do Referrals work?",
                a: [
                    "Search for KnoCard user & select Share Referral.",
                    "Search contacts to locate desired recipient.",
                    "Text message is sent with pre-populated message and KnoCard link.",
                    "KnoCard user receives a notification to alert of an incoming referral.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Most referrals die on the spot due to lack of access to business card or business info; with KnoCard, referral info is always as close as your phone.",
                    "KnoCard alerts users who have received referrals, and provides recipient information upon receiving consent.",
                ],
            },
        ],
    },
    {
        id: "scan_business_card",
        title: "Scan Business Card",
        icon: "/icones/scan_business_card.svg",
        href: "/section/scan_business_card",
        bg: "/bg/scan_business_card.svg",
        faq: [
            {
                q: "What is Scan Business Card?",
                a: [
                    "Transforms outdated business cards into valuable leads.",
                    "Digitally stores contact data and images.",
                ],
            },
            {
                q: "How does Scan Business Card work?",
                a: [
                    "The user scans a business card or takes a photo; OCR technology converts the contact information into a digital format.",
                    "The business card owner is automatically added as a new contact and integrated into the KnoCard user’s pipeline.",
                    "The business card owner (prospect) receives a text message from the KnoCard user, which includes a pre-written message and a link to the KnoCard.",
                    "The prospect’s viewing activity is tracked and reported back to the KnoCard user.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "As opposed to traditional business card scanners, KnoCard offers a quick way to access and manage the captured information.",
                    "KnoCard Reporting monitors the prospect’s activity and provides detailed data not available through other card scanners.",
                ],
            },
        ],
    },
    {
        id: "add_new_prospect",
        title: "Add New Prospect",
        icon: "/icones/add_new_prospect.svg",
        href: "/section/add_new_prospect",
        bg: "/bg/add_new_prospect.svg",
        faq: [
            {
                q: "What is Add New Prospect?",
                a: [
                    "Captures new prospect information through a variety of methods.",
                    "Drops new prospect into KnoCard’s CRM system - the KnoCard Pipeline.",
                ],
            },
            {
                q: "How does Add New Prospect work?",
                a: [
                    "Platform creates a new prospect entry through Scan Business Card, QR with Lead Generation, Share with New Prospect option, or Add Prospect.",
                    "All information that was captured is dropped in to the KnoCard Pipeline.",
                    "User receives notification when the prospect has viewed content.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "KnoCard’s game changing system takes the guesswork out of the task of managing over leads.",
                ],
            },
        ],
    },
    {
        id: "share",
        title: "Share",
        icon: "/icones/share.svg",
        href: "/section/share",
        bg: "/bg/share.svg",
        faq: [
            {
                q: "What is Share?",
                a: [
                    "Effective system for transmitting business information to leads and prospects",
                ],
            },
            {
                q: "How does Share work?",
                a: [
                    "User selects content to be shared and chooses to share with a KnoCard user, new prospect, existing contact, or as a copied link.",
                    "Information is sent via text message to new and existing prospects, and shared via in-app messaging with KnoCard users.",
                    "Shares and viewing activity are tracked and reported.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Recipients are not required to download an app to view content.",
                    "Information is delivered through a trusted source, via text message using personal mobile number, or directly inside the KnoCard app.",
                ],
            },
        ],
    },
    {
        id: "team_&_groups",
        title: "Team & Groups",
        icon: "/icones/team_&_groups.svg",
        href: "/section/team_&_groups",
        bg: "/bg/team_&_groups.svg",
        faq: [
            {
                q: "What are Team & Groups?",
                a: [
                    "Turnkey marketing for members of a team, group, or company tied in to the KnoCard platform.",
                    "Dedicated media files and landing pages are included by default based on the leader's selection.",
                    "All members will follow the leader's social posts to ensure effective team communication.",
                ],
            },
            {
                q: "How does Team & Groups work?",
                a: [
                    "Upon signup, the user selects their associated team or group.",
                    "Media files and landing page are automatically added to KnoCard.",
                    "Users are ready to start sharing immediately.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike corporate replica websites or mobile platforms, KnoCard allows users to add their own content.",
                    "Utilizes data analytics and tracking to eliminate rejection and promote success.",
                    "When used with KnoCard Link, it offers unparalleled coaching options.",
                ],
            },
        ],
    },
    {
        id: "reporting",
        title: "Reporting",
        icon: "/icones/reporting.svg",
        href: "/section/reporting",
        bg: "/bg/reporting.svg",
        faq: [
            {
                q: "What is Reporting?",
                a: [
                    "Powerful system that incorporates data analytics to generate a smooth, rejection free sales process",
                    "Provides valuable insight that filters out the no’s and ensures users they are not doing business in the dark",
                ],
            },
            {
                q: "How does Reporting work?",
                a: [
                    "Platform captures contact information of leads whom KnoCard user has shared with, including new prospects who have been added by user or completed a lead capture form.",
                    "System tracks shares, clicks, and feedback form results.",
                    "KnoCard Reporting categorizes, filters, and displays viewers’ activity.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "First of its kind rejection free system encourages high share rates.",
                    "Promotes effective time management, giving users the ability to spend time and effort only on interested prospects.",
                ],
            },
        ],
    },
    {
        id: "pipeline",
        title: "Pipeline",
        icon: "/icones/pipeline.svg",
        href: "/section/pipeline",
        bg: "/bg/pipeline.svg",
        faq: [
            {
                q: "What is Pipeline?",
                a: [
                    "Integrated CRM solution connecting all aspects of your business network.",
                    "Manages sharing, reporting, scheduling, tasks, follow-ups, and sales within a single platform.",
                ],
            },
            {
                q: "How does Pipeline work?",
                a: [
                    "Seamlessly tracks and manages contacts once integrated.",
                    "Automatically captures and stores all interactions, engagements, and analytics.",
                ],
            },
            {
                q: "Competitor's Edge",
                a: [
                    "Unlike other CRMs that require manual imports, Knocard Pipeline integrates all business activities in one place.",
                    "Tracks shares, engagements, analytics, and follow-ups comprehensively.",
                    "Simplifies workflows and enhances productivity, offering a competitive advantage.",
                ],
            },
        ],
    },
];