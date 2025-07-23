"use client"

import { splitTextByHeight } from "@/lib/splitText-util";
import styles from "./master-education-page.module.css"
import { BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react";

const text = `Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment. As a result, children often experience less culture shock than their parents in many cases as school
programs are specifically designed to meet the challenges of moving to an international environment.
Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly`

export default function MasterEducationPageA() {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const divRef1 = useRef<HTMLDivElement>(null);
    const divRef2 = useRef<HTMLDivElement>(null);
    const divRef3 = useRef<HTMLDivElement>(null);
    const divRef4 = useRef<HTMLDivElement>(null);
    const divRef5 = useRef<HTMLDivElement>(null);

    const [part, setPart] = useState([""])
    const [fontSize, setFontSize] = useState("1dvw")
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

        let temp = splitTextByHeight(text, divRef1.current?.offsetHeight, size.width, hiddenRef.current)
        let temp1 = splitTextByHeight(temp[1], divRef2.current?.offsetHeight, size.width, hiddenRef.current)
        let temp2 = splitTextByHeight(temp1[1], divRef3.current?.offsetHeight, size.width, hiddenRef.current)
        let temp3 = splitTextByHeight(temp2[1], divRef4.current?.offsetHeight, size.width, hiddenRef.current)
        let temp4 = splitTextByHeight(temp3[1], divRef5.current?.offsetHeight, size.width, hiddenRef.current)

        setPart([temp[0], temp1[0], temp2[0], temp3[0], temp4[0]])

        return () => resizeObserver.disconnect();
    }, [])

    useEffect(() => {
    }, [size])

    return (
        <div className="h-full w-full px-6 sm:px-6 py-6 sm:py-6 dark:bg-gray-900 dark:text-white overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="lg:text-base md:text-lg sm:text-sm flex lg:flex-row flex-col gap-[2rem] lg:h-[100%]">
                {/* Left Column */}
                <div className="flex lg:flex-row flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                    <div className="flex flex-1 flex-col gap-[1rem]">
                        <h1 className="pt-[0.5rem] pb-[0.5rem] dark:border-white border-black" style={{ fontSize: "2rem", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid", borderBottom: "1px solid" }}>
                            Education
                        </h1>
                        <div className="flex flex-1 text-justify" style={{ textAlignLast: "justify" }} ref={divRef1}>
                            {part[0]}
                        </div>
                        <div className="lg:h-[calc(25dvw*9/16)] bg-black">
                            <video src="/videos/cover.mp4" style={{ width: "100%", margin: "auto" }} controls></video>
                        </div>
                    </div>
                    <div className="flex flex-1  gap-[1rem] text-justify" style={{ textAlignLast: "justify" }} ref={divRef2}>
                        {part[1]}
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                    <div className="flex lg:flex-row flex-col flex-1 gap-[1rem] h-[calc(100dvh-50dvw*9/16)]">
                        <div className="flex flex-1 gap-[1rem] dark:border-white border-black-600 border-t-4 border-b-4">
                            <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                <p
                                    className="dark:text-white-100 text-white-100 opacity-20 lg:text-[450px] text-[40dvh]"
                                    style={{
                                        position: "absolute",
                                        top: "60%",
                                        left: "50%",
                                        transform: "translate(-50%, -40%)",  // light and subtle
                                        zIndex: 1,
                                        margin: 0,
                                        userSelect: "none",
                                        pointerEvents: "none",
                                        fontWeight: "bold",
                                        lineHeight: 1,
                                    }}
                                >
                                    ”
                                </p>
                                <p className={styles.quoteSection}>
                                    THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-1 text-justify" style={{ textAlignLast: "justify" }} ref={divRef3}>
                            {part[2]}
                        </div>
                    </div>
                    <div className="flex bg-black" style={{ height: "calc(50dvw*9/16)" }}>
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
    )
}
