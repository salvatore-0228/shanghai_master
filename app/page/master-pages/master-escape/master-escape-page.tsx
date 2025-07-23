import styles from "./master-escape-page.module.css";
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
TThe fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.`

export default function MasterEscapePage() {
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
        <div className="h-full w-full px-6 sm:px-6 py-6 sm:py-6 dark:bg-gray-900 dark:text-white  overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="flex lg:flex-row flex-col gap-[2rem] h-full">
                {/* Left Column */}
                <div className="flex lg:flex-row flex-col flex-1 gap-[1rem]">
                    <div className="flex flex-col flex-1 gap-[1rem]">
                        <h1 className="dark:border-white" style={{ fontSize: "3rem", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid", borderBottom: "1px solid" }}>
                            Asian Escapes
                        </h1>
                        <div className={`${styles.dropCap}`}>
                            <span className={styles.firstLetter}>
                                O
                            </span>
                            <p style={{ fontSize: "1.2rem" }}>
                                <strong>ne of the best fringe benefits of moving to Hong Kong is its proximity to some of the best vacation spots and most exotic adventure destinations in the world.</strong>
                            </p>
                        </div>
                        <div className="overflow-hidden flex-1 text-justify" ref={divRef1}>
                            {part[0]}
                        </div>
                        <div className="bg-black">
                            <video src="/videos/cover.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                        </div>
                    </div>
                    {/* Center Column */}
                    <div className="flex-1 text-justify" style={{ textAlignLast: "justify" }} ref={divRef2}>
                        {part[1]}
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col flex-1 gap-[1rem]">
                    <div className="flex flex-1 lg:flex-row flex-col gap-[1rem]">
                        <div className="text-justify w-full" style={{ textAlignLast: "justify" }} ref={divRef3}>
                            {part[2]}
                        </div>
                        <div className="bg-black" style={{ width:"100%", height: "100%" }}>
                            <video src="/videos/cover.mp4" style={{ width:"100%", aspectRatio: "16/9", height: "calc(85dvh - 50dvw*9/16)", margin: "auto" }} controls></video>
                        </div>
                    </div>
                    <div className="flex-1 bg-black" style={{ height: "" }}>
                        <video src="/videos/cover.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                    </div>
                </div>
                {/* Hidden div for measuring text height */}
                <div
                    ref={hiddenRef}
                    className="invisible absolute text-black text-justify"
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