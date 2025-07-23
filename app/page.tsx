"use client"

import { BookPage } from "@/app/page/book-page"
import { redirect } from "next/navigation"
import type { PageData } from "@/types/book"
import { useState } from "react"
import VideoLogo from "@/app/page/log-page"
import CoverPage from "@/app/page/cover-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"video" | "shanghai" | "next" | "contents" | "history" | "history2" | "culture" | "reading" | "introduction">("video")

  const handleVideoEnd = () => {
    setCurrentPage("shanghai")
  }

  const handlePowerButtonClick = () => {
    redirect("/page/1")
  }

  if (currentPage === "video") {
    return <VideoLogo onVideoEnd={handleVideoEnd} />
  }

  if (currentPage === "shanghai") {
    return <CoverPage onPowerButtonClick={handlePowerButtonClick} />
  }
  // Redirect to page 1
  // return <BookPage data={mockPageData.pages[0]} />
}
