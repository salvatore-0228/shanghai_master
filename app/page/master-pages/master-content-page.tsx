"use client"

interface TableOfContentsProps {
    // onBackClick: () => void
    // onStartReading: () => void
    colorMode: string
}

const tableOfContentsData = {
    preparations: [
        { title: "History", page: 30 },
        { title: "People and culture", page: 36 },
        { title: "Language", page: 48 },
        { title: "Geography", page: 50 },
        { title: "Cityscape", page: 51 },
        { title: "Climate", page: 54 },
        { title: "Police and crime", page: 56 },
        { title: "Books and films", page: 58 },
        { title: "Health preparations", page: 60 },
        { title: "Financial preparations", page: 62 },
        { title: "Visas", page: 64 },
        { title: "Relocation checklist", page: 70 },
        { title: "Pet relocation", page: 74 },
        { title: "Look-see trip", page: 82 },
        { title: "Pre-move survey", page: 84 },
        { title: "Shipping and packing", page: 85 },
        { title: "Education", page: 86 },
    ],
    softLanding: [
        { title: "When you arrive", page: 146 },
        { title: "Health care", page: 148 },
        { title: "Getting around", page: 166 },
        { title: "Money and banking", page: 174 },
        { title: "Getting connected", page: 180 },
        { title: "Culture shock", page: 184 },
        { title: "Hotels", page: 188 },
        { title: "Serviced apartments", page: 198 },
        { title: "Serviced offices", page: 206 },
        { title: "Finding housing", page: 210 },
        { title: "Former French Concession", page: 214 },
        { title: "Jing'an and Zhongshan Park", page: 222 },
    ],
    livingTheLife1: [
        { title: "Xintiandi and People's Square", page: 230 },
        { title: "Xujiahui", page: 238 },
        { title: "Hongqiao and Gubei", page: 244 },
        { title: "Huacao and Xujing", page: 252 },
        { title: "Jinqiao and Kangqiao", page: 260 },
        { title: "Lujiazui and Century Park", page: 268 },
        { title: "Establishing your home", page: 276 },
        { title: "Food shopping", page: 280 },
        { title: "Eating and drinking", page: 292 },
        { title: "Nightlife", page: 316 },
        { title: "Shopping", page: 322 },
        { title: "Fitness and recreation", page: 342 },
        { title: "Day trips", page: 360 },
        { title: "Family activities", page: 370 },
        { title: "Health and wellness", page: 378 },
        { title: "Shanghai attractions", page: 386 },
        { title: "Community", page: 390 },
        { title: "Dating and marriage", page: 400 },
        { title: "Pets", page: 402 },
        { title: "Language courses", page: 406 },
        { title: "Asian escapes", page: 412 },
    ],
    maps: [
        { title: "Shanghai map", page: 12 },
        { title: "Education", page: 138 },
        { title: "Former French Concession", page: 220 },
        { title: "Jing'an and Zhongshan Park", page: 226 },
        { title: "Xintiandi and People's Square", page: 234 },
        { title: "Xujiahui", page: 240 },
        { title: "Hongqiao and Gubei", page: 248 },
        { title: "Huacao and Xujing", page: 256 },
        { title: "Jinqiao and Kangqiao", page: 264 },
        { title: "Lujiazui and Century Park", page: 272 },
        { title: "Subway map", page: 432 },
    ],
}

export default function MasterContentsTablePage() {
    const renderSection = (title: string, entries: Array<{ title: string; page: number }>, maincolor: string, pagecolor: string, pageNumber?: string) => (
        <div className="mb-[1rem]">
            <div style={{ display: "flex" }}>
                <span style={{ backgroundColor: maincolor, color: "white", padding: "0.5rem", width: "100%", textAlign: "right", textDecoration: "underline" }}>{title}</span>
                {<span style={{ width: "3rem", backgroundColor: pagecolor, padding: "0.5rem", color: "white", fontWeight: "600", textAlign: "right" }}>{pageNumber}</span>}
            </div>
            <ul className="pt-[0.25rem]">
                {entries.map((entry, index) => (
                    <li key={index} className="flex justify-between items-baseline mt-[0.5%] py-[0.5%] cursor-pointer transition-all duration-200 ease-in-out rounded-[2px] hover:bg-[rgba(139,115,85,0.1)]">
                        <span>{entry.title}</span>
                        <span>{entry.page}</span>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <div className="h-full w-full px-6 sm:px-6 py-6 sm:py-6 dark:bg-gray-900 dark:text-white lg:overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
            <div className="flex lg:flex-row flex-col gap-[2rem] lg:text-[0.78rem]">
                <div className="flex flex-col flex-1 gap-[1rem]">
                    <div className="aspect-[16/9]">
                        <div className="videoWrapper" style={{ height: "100%" }}>
                            <video src="/videos/cover.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                        </div>
                    </div>
                    <div className="lg:columns-[2] gap-[1rem]">
                        {renderSection("PREPARATIONS", tableOfContentsData.preparations, "#000000", "#cccccc", "26")}
                    </div>
                </div>
                <div className="flex-1 lg:columns-[2] gap-[1rem]">
                    {renderSection("SOFT LANDING", tableOfContentsData.softLanding, "#3a4c63", "#9e9277", "142")}
                    {renderSection("LIVING THE LIFE", tableOfContentsData.livingTheLife1, "#282a40", "#2da5d2", "288")}
                    {renderSection("MAPS", tableOfContentsData.maps, "#675950", "#a1ac99")}
                </div>
            </div>
        </div>
    )
}
