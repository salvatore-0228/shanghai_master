
"use client"

import styles from "./master-map-page.module.css"
import { useState, useRef, useEffect } from "react"

interface MapPageProps {
    onBackClick?: () => void
    onNextClick?: () => void
}

export default function MasterMapPage() {
    const mapContainerRef = useRef<HTMLDivElement>(null)

    return (
        <div className="h-full w-full">
            <div className={`${styles.pageMainContainer} bg-blue-300 dark:bg-gray-700`} style={{ alignItems: "center" }}>
                {/* Main Content */}
                {/* Map Container */}
                <div className={styles.mapContainer} ref={mapContainerRef}>
                    {/* Interactive Map */}
                    <iframe
                        src="https://www.google.com/maps/d/u/3/embed?mid=1YccAB4h8Zo1D9Uxw8XUW0qidxgfJNOIh"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    )
}
