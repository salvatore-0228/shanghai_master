import styles from "./master-escape-page-a.module.css";
import { splitTextByHeight } from "@/lib/splitText-util";
import { useEffect, useRef, useState } from "react";

const text = `
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.`

export default function MasterEscapeCityPage() {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const divRef1 = useRef<HTMLDivElement>(null);
    const divRef2 = useRef<HTMLDivElement>(null);
    const divRef3 = useRef<HTMLDivElement>(null);
    const divRef4 = useRef<HTMLDivElement>(null);
    const divRef5 = useRef<HTMLDivElement>(null);

    const [part, setPart] = useState([""])
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            const entry = entries[0];
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });

        if (divRef1.current) {
            resizeObserver.observe(divRef1.current);
        }

        if (!hiddenRef.current) return;

        const hidden = hiddenRef.current;

        hidden.style.width = `${divRef1.current?.offsetWidth}px`;
        let temp = splitTextByHeight(text, divRef1.current?.offsetHeight, divRef1.current?.offsetWidth, hiddenRef.current)
        let temp1 = splitTextByHeight(temp[1], divRef2.current?.offsetHeight, divRef2.current?.offsetWidth, hiddenRef.current)

        hidden.style.width = `${divRef3.current?.offsetWidth}px`;
        let temp2 = splitTextByHeight(temp1[1], divRef3.current?.offsetHeight, divRef3.current?.offsetWidth, hiddenRef.current)

        setPart([temp[0], temp1[0], temp2[0]])

        return () => resizeObserver.disconnect();
    }, [])

    return (
        <div className="h-full w-full px-6 sm:px-6 py-6 sm:py-6 dark:bg-gray-900 dark:text-white">
            <div className={styles.pageContainer}>
                {/* Left Column */}
                <div className={`${styles.leftpage} flex flex-row flex-1 gap-[1.5rem]`}>
                    <div className={`${styles.leftColumn} flex-1`}>
                        <div className={`${styles.dropCap}`}>
                            <span className={styles.firstLetter}>
                                O
                            </span>
                            <p style={{ fontSize: "1.2rem" }}>
                                <strong>ne of the best fringe benefits of moving to Hong Kong is its proximity to some of the best vacation spots and most exotic adventure destinations in the world.</strong>
                            </p>
                        </div>
                        <div className="flex-1 overflow-hidden text-justify" style={{ textAlignLast: "justify" }} ref={divRef1}>
                            {part[0]}
                        </div>
                        <div className="flex flex-row gap-1">
                            <a href='#' className="inline-block text-white transition">
                                <img src="/images/btn/tripadvisor_btn.png" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="/images/btn/youtube_btn.png" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="/images/btn/phone_btn.png" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="/images/btn/globe_btn.png" alt="TripAdvisor" className='w-[40px] h-[40px]' />

                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="/images/btn/point_btn.png" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                        </div>
                        <div className="bg-black aspect-[16/9]">
                            <video src="/videos/cover.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                        </div>
                    </div>
                    {/* Center Column */}
                    <div className="flex-1 text-justify" style={{textAlignLast: "justify"}} ref={divRef2}>
                        {part[1]}
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 gap-[1rem]">
                    <div className="flex lg:flex-row flex-col gap-[1rem]">
                        <div className="text-justify w-full" style={{ textAlignLast: "justify" }} ref={divRef3}>
                            {part[2]}
                        </div>
                        <div className="bg-black" style={{ width:"100%", height: "100%" }}>
                            <video src="/videos/cover.mp4" style={{ width:"100%", aspectRatio: "16/9", height: "calc(85dvh - 50dvw*9/16)", margin: "auto" }} controls></video>
                        </div>
                    </div>
                    <div className="flex-1 bg-black aspect-[16/9]" style={{ height: "", bottom: 0 }}>
                        <video src="/videos/cover.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                    </div>
                </div>
                {/* Hidden div for measuring text height */}
                <div
                    ref={hiddenRef}
                    className="invisible absolute text-justify text-black"
                    style={{
                        height: '0px',
                        padding: '0px',
                        position: 'absolute',
                        visibility: 'hidden',
                        zIndex: -1,
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </div>

    );
}