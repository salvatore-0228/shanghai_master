"use client"

import { splitTextByHeight } from "@/lib/splitText-util";
import styles from "./master-education-page.module.css"
import { BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react";

const text = `In between eras of multiple kingdoms and warlords, Chinese dynasties, or more recently republics, have
ruled a China of varying shapes and sizes. This began with the Qin Dynasty in 221 BC, when Qinshihuang
united the various warring kingdoms, thus creating the first Chinese empire and beginning construction
of the Great Wall.
The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
which are still pervasive throughout modern Chinese society.
The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
which are still pervasive throughout modern Chinese society. Political and cultural influences from
many parts of Asia, brought by waves of immigration, periods of expansion and cultural assimilation,
formed the modern culture of China.
The Qing Dynasty (1644-1911), founded by the Manchus, was the last dynasty and only the second not
dominated by ethnic Hans, although the Manchus adopted the Confucian norms of traditional Chinese
government. By the 19th century, the Qing empire had economically stagnated and was threatened by
Western imperial powers.
The Qing were soundly defeated in the First Opium War (1842) by the British, resulting in the ceding of
Hong Kong and the legalization of opium imports. By 1870, opium accounted for over 40 percent of all
goods imported to China.
Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
China under his control, eventually turning on the Communist Party.
This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
party to this day.
Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from Chinese society.
After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
blossom under open market reforms and the welcoming of foreign investment.`

const secondText = `Shanghai emerged as a popular export center for the British East India Company in the 18th century as
Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
had no desire for Western goods, thus creating an unsustainable trade imbalance.
Shanghai emerged as a popular export center for the British East India Company in the 18th century as
Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
had no desire for Western goods, thus creating an unsustainable trade imbalance.After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
blossom under open market reforms and the welcoming of foreign investment. Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
China under his control, eventually turning on the Communist Party.
This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
party to this day.
Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
allies launched`

export default function MasterEducationPage() {
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

        let temp = splitTextByHeight(text, divRef1.current?.offsetHeight, size.width, hiddenRef.current)
        let temp1 = splitTextByHeight(temp[1], divRef2.current?.offsetHeight, size.width, hiddenRef.current)
        let temp2 = splitTextByHeight(temp1[1], divRef3.current?.offsetHeight, size.width, hiddenRef.current)
        let temp3 = splitTextByHeight(secondText, divRef4.current?.offsetHeight, size.width, hiddenRef.current)
        let temp4 = splitTextByHeight(temp3[1], divRef5.current?.offsetHeight, size.width, hiddenRef.current)

        setPart([temp[0], temp1[0], temp2[0], temp3[0], temp4[0]])

        return () => resizeObserver.disconnect();
    }, [])

    return (
        <div className="h-full w-full px-6 sm:px-6 py-6 sm:py-6 dark:bg-gray-900 dark:text-white overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="lg:text-base md:text-lg sm:text-sm flex lg:flex-row flex-col gap-[2rem] lg:h-[100%]">
                {/* Left Column */}
                <div className="flex flex-col flex-1 justify-between lg:w-1/2">
                    <div className="flex flex-col flex-1" style={{ width: "100%" }}>
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                        <div>
                            <h1 className="lg:pt-3 lg:pb-3 pt-[1rem] pb-[1rem] border-black-600 dark:border-black-600" style={{ fontWeight: "700", fontSize: "calc(50dvw/13)", textTransform: "uppercase", borderTop: "5px solid", borderBottom: "1px solid" }}>
                                Education
                            </h1>
                        </div>
                        <div className={`${styles.dropCap}`}>
                            <span className={styles.firstLetter}>
                                A
                            </span>
                            <p style={{ fontSize: "1.2rem" }}>
                                s a soon-to-be expat, one of the most important and difficult decisions you will make is where your child will go to school. While there will be a host of concerns and questions that arise during your search for a
                                school for your child in Shanghai, generally speaking, international assignees have three main concerns: the safety of their children; the happiness of their children; and the quality of their children's education.
                            </p>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-[1rem]">
                            <div className="flex flex-row lg:w-[50%] text-justify" style={{ textAlignLast: "justify" }} ref={divRef1}>
                                {part[0]}
                            </div>
                            <div className="flex flex-row lg:w-[50%] text-justify" style={{ textAlignLast: "justify" }} ref={divRef2}>
                                {part[1]}
                            </div>
                        </div>
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
