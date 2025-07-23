"use client"

import { useEffect, useRef } from "react"
import { Power } from "lucide-react"

interface ShanghaiPageProps {
    onPowerButtonClick: () => void
}

export default function CoverPage({ onPowerButtonClick }: ShanghaiPageProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    return (
        <div className="relative">
            <button className="absolute z-[2] translate-x-[calc(50dvw-10dvh)]" onClick={onPowerButtonClick}>
                <img src="/images/btn/power_btn.png" width="100dvh" height="100dvh" />
            </button>

            {/* Main Content Area */}
            <div className="relative">
                {/* Background Image */}
                <section className="absolute w-full h-screen overflow-hidden">
                    <video
                        ref={videoRef}
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                    >
                        <source src="/videos/Shanghai cover landscape final.mp4" media="(min-width: 769px)" type="video/mp4" />
                        <source src="/videos/cover_no_power.mp4" media="(max-width: 768px)" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>
            </div>
        </div>
    )
}
