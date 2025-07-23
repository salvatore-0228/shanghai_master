
"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import styles from "./master-education-page.module.css"

import {
    Info, DollarSign, Film, FileText, Landmark, Calendar,
    Facebook, Building2, Twitter, Linkedin, Youtube, Instagram, Star, Mail, Globe,
    Flag, Languages, Pencil, GraduationCap, Heart, Clock, Trophy,
    Phone
} from 'lucide-react';
import Link from "next/link"

interface AsianEscapesPageProps {
    onBackClick?: () => void
    onNextClick?: () => void
}

function InfoRow({ label, value, isLink = false, isRange = false }: { label: string; value: string; isLink?: boolean; isRange?: boolean }) {
    return (
        <div className="flex items-start px-[10px]" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem", position: "relative" }}>
            <span className="font-semibold w-60">{label}:</span>
            <div style={{ right: "1rem", textAlign: "right", position: "absolute", width: "50vw" }}>
                {isLink ? (
                    <a href="#" className="text-blue-600 underline">{value}</a>
                ) : isRange ? (
                    <span>
                        <span className="text-blue-600">from: </span>元170,500<br />
                        <span className="text-blue-600">to: </span>元275,600
                    </span>
                ) : (
                    <span>{value}</span>
                )}
            </div>
        </div>
    );
}

export default function EducationListingPage() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="h-full w-full px-4 sm:px-6 py-4 sm:py-6 overflow-y-scroll h-full scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 dark:bg-gray-900 dark:text-white">
            <div className="flex lg:flex-row flex-col gap-[2rem]">
                <div className="flex lg:flex-row flex-col flex-1 columns-2 gap-[1rem]">
                    <div className="flex-1">
                        <div className="max-w-4xl mx-auto mb-6">
                            <div className="rounded-lg border-white-100 shadow-md p-6 dark:bg-gray-900 dark:text-white dark:border-white dark:border">
                                {/* Header */}
                                <div className="flex items-center space-x-4 mb-3">
                                    <div className="w-12 h-12 rounded">
                                        <a href="#">
                                            <img src="/images/westernSchool.png" alt="no image" />
                                        </a>
                                    </div>
                                    <h1 className="text-l font-semibold">
                                        Western International School of Shanghai
                                    </h1>
                                </div>

                                <div style={{ marginBottom: "1rem" }} className="text-sm">
                                    <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Welcome message from the principal</div>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        Wellington College Shanghai has a reputation for excellence and forward-thinking education of the highest quality. We want our young people to
                                        become the very best they can be. Independent, inquisitive, intellectual adults with strong core values. A proud tradition of values shared with
                                        Wellington College UK and all Wellington College China schools: courage, kindness, integrity, responsibility and respect. At Wellington in
                                        Shanghai, we also benefit from the inclusivity of our international community and our position in China today.
                                    </p>
                                    <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                        We have high expectations for our pupils and ourselves, striving to achieve excellence in all that we do together. It is our ambition that every child
                                        leaves Wellington ready to embrace all opportunities and challenges: to lead and live well.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <Link href="https://shanghai.wellingtoncollege.cn/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UC4y-7qy59mkS-Xf949Mecdg" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.facebook.com/WellingtonCollegeShanghai" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/school/wellington-college-international-shanghai/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/wellingtoncollegeshanghai/" passHref legacyBehavior>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 gap-x-10 text-sm">
                                    <InfoRow label="Curriculum" value="IB, British, and International" isLink />
                                    <InfoRow label="Diploma" value="IGCSE and IB Diploma " isLink />
                                    <InfoRow label="Enrollment" value="1600  Age range: (2-18)" />
                                    <InfoRow label="Nationalities" value="40" />
                                    <InfoRow label="Tuition" value="RMB305,400-379,600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex-1 rounded-lg shadow-md p-6 dark:bg-gray-900 dark:text-white dark:border dark:border-white">
                        <div className="mb-[2rem]">
                            <p style={{ padding: "1rem" }}>Address: No. 1500 Yao Long Road (near the Oriental Sports Center) Pudong</p>
                            <div className="w-full h-[30vh] rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.9505705298343!2d121.4716977!3d31.1507666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27b135fa047d9%3A0x68a557f589b29783!2sShanghai%20Wellington%20International%20School!5e0!3m2!1sen!2sus!4v1685846812345!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                        <div className="mb-[2rem]">
                            <p style={{ padding: "1rem" }}>Address: No. 195 Tongwan Road, Pudong New District</p>
                            <div className="w-full h-[30vh] rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/place/Tong+Wan+Lu,+Pu+Dong+Xin+Qu,+Shang+Hai+Shi,+China/@31.1477446,121.4665697,17z/data=!3m1!4b1!4m6!3m5!1s0x35b27b6a7af31859:0xacccc8f958656227!8m2!3d31.14774!4d121.46915!16s%2Fg%2F11c61z1j9r?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", marginBottom: "1rem" }}>
                                <Mail size={20} />
                                <p className="ml-[1rem]">info.shanghai@wellingtoncollege.cn</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <Phone size={20} />
                                <p className="ml-[1rem]">tel:86-21-5185-3866</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col flex-1 columns-2 gap-[1rem]" style={{ color: "black" }}>
                    <div className="flex flex-1 flex-col shadow-md p-6 rounded-lg p-6 mx-auto dark:bg-gray-900 dark:text-white dark:border dark:border-white">
                        <div className="mb-6">
                            <div className="lg:h-[calc(25dvw*9/16)]">
                                <video src="/videos/cover.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                            </div>
                        </div>
                        <div style={{ flex: "1" }}>
                            <AccordionTable />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[1rem]">
                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900 dark:text-white dark:border dark:border-white">
                            {/* Header */}
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="w-12 h-12 rounded">
                                    <a href="#">
                                        <img src="/images/westernSchool.png" alt="no image" />
                                    </a>
                                </div>
                                <h1 className="text-l font-semibold">
                                    Western International School of Shanghai
                                </h1>
                            </div>

                            <div style={{ marginBottom: "1rem" }} className="text-sm">
                                <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>Welcome message from the principal</div>
                                <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                    Wellington College Shanghai has a reputation for excellence and forward-thinking education of the highest quality. We want our young people to
                                    become the very best they can be. Independent, inquisitive, intellectual adults with strong core values. A proud tradition of values shared with
                                    Wellington College UK and all Wellington College China schools: courage, kindness, integrity, responsibility and respect. At Wellington in
                                    Shanghai, we also benefit from the inclusivity of our international community and our position in China today.
                                </p>
                                <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
                                    We have high expectations for our pupils and ourselves, striving to achieve excellence in all that we do together. It is our ambition that every child
                                    leaves Wellington ready to embrace all opportunities and challenges: to lead and live well.
                                </p>
                            </div>

                            <div className="flex flex-row gap-1 text-2xl mb-3" style={{ borderBottom: "1px solid gray", paddingTop: "1rem", paddingBottom: "1rem" }}>
                                <Link href="https://shanghai.wellingtoncollege.cn/" passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <img src="/images/btn/globe_btn.png" width={40} height={40} alt="no image" />
                                        </div>
                                    </a>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UC4y-7qy59mkS-Xf949Mecdg" passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <img src="/images/btn/youtube_btn.png" width={40} height={40} alt="no image" />
                                        </div>
                                    </a>
                                </Link>
                                <Link href="https://www.facebook.com/WellingtonCollegeShanghai" passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <img src="/images/btn/facebook_btn.png" width={40} height={40} alt="no image" />
                                        </div>
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/school/wellington-college-international-shanghai/" passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <img src="/images/btn/linkedin_btn.png" width={40} height={40} alt="no image" />
                                        </div>
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/wellingtoncollegeshanghai/" passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <img src="/images/btn/instagram_btn.png" width={40} height={40} alt="no image" />
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 gap-x-10 text-sm">
                                <InfoRow label="Curriculum" value="IB, British, and International" isLink />
                                <InfoRow label="Diploma" value="IGCSE and IB Diploma " isLink />
                                <InfoRow label="Enrollment" value="1600  Age range: (2-18)" />
                                <InfoRow label="Nationalities" value="40" />
                                <InfoRow label="Tuition" value="RMB305,400-379,600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const accordionData = [
    { label: "Nationalities", icon: <Flag color="#000" size={20} />, content: "Nationalities content goes here." },
    { label: "Languages", icon: <Languages color="#000" size={20} />, content: "Languages content goes here." },
    { label: "Classroom", icon: <Pencil color="#000" size={20} />, content: "Classroom content goes here." },
    { label: "Academics", icon: <GraduationCap color="#000" size={20} />, content: "Academics content goes here." },
    { label: "Student support", icon: <Heart color="#000" size={20} />, content: "Student support content goes here." },
    { label: "Admissions", icon: <FileText color="#000" size={20} />, content: "Admissions content goes here." },
    { label: "School day", icon: <Clock color="#000" size={20} />, content: "School day content goes here." },
    { label: "Extracurricular activities", icon: <Trophy color="#000" size={20} />, content: "Extracurricular activities content goes here." },
    { label: "Facilities", icon: <Building2 color="#000" size={20} />, content: "Facilities content goes here." },
    { label: "About the school", icon: <Info color="#000" size={20} />, content: "About the school content goes here." },
];

function AccordionTable() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="rounded-lg shadow-md p-4 mb-6 dark:border-white dark:border">
            {accordionData.map((item, idx) => (
                <div key={item.label} className="border-b last:border-b-0">
                    <button
                        className="w-full flex items-center gap-3 py-3 px-2 dark:hover:text-black hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                    >
                        {item.icon}
                        <span className="flex-1 text-left font-medium">{item.label}</span>
                        <span className="ml-auto">{openIndex === idx ? "▲" : "▼"}</span>
                    </button>
                    {openIndex === idx && (
                        <div className="pb-3 text-gray-700 text-sm">
                            <Content />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function Content() {
    return (
        <div className="bg-gray-50 rounded p-4 space-y-4">
            <div>
                <div className="font-semibold text-black-700 mb-1">Number of students</div>
                <div className="text-black-800">Peak enrollment 775</div>
            </div>
            <div>
                <div className="font-semibold text-black-700 mb-1">Number of nationalities represented in the school</div>
                <div className="text-black-800">Around 50</div>
            </div>
            <div>
                <div className="font-semibold text-black-700 mb-1">Most common nationality</div>
                <div className="text-black-800">
                    The Western International School of Shanghai (WISS) is a truly diverse community with students representing around 50 different nationalities and with no majority population.
                </div>
            </div>
        </div>
    )
}