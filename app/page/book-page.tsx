"use client"

import Header from "../../components/header"
import Footer from "../../components/footer"
import { ContentArea } from "../../components/content-area"
import type { PageData } from "@/types/book"

import MasterContentsTablePage from "./master-pages/master-content-page"
import MasterHistoryPage from "./master-pages/master-history/master-history-page"
import MasterHistoryPageA from "./master-pages/master-history/master-history-page-a"
import MasterHistoryPageB from "./master-pages/master-history/master-history-page-b"

import { notFound } from "next/navigation"
import MasterEducationPage from "./master-pages/master-education/master-education-page"
import MasterEducationPageA from "./master-pages/master-education/master-education-page-a"
import MasterEducationPageB from "./master-pages/master-education/master-education-page-b"
import EducationMainPage from "./master-pages/master-education/education-main-page"
import EducationListingPage from "./master-pages/master-education/education-listing-page"
import MasterEscapePage from "./master-pages/master-escape/master-escape-page"
import MasterMapPage from "./master-pages/master-map-page"

import { useEffect } from "react"
import MasterEscapeCityPage from "./master-pages/master-escape/master-escape-page-a"

interface BookPageProps {
  data: PageData
}

const pages = [
  { page: MasterContentsTablePage, sectionTitle: "PREPARATIONS", subTitle: "Table of contents", pageNum: 1 },
  { page: MasterHistoryPage, sectionTitle: "Preparations", subTitle: "History", pageNum: 2 },
  { page: MasterHistoryPageA, sectionTitle: "Preparations", subTitle: "History", pageNum: 3 },
  { page: MasterHistoryPageB, sectionTitle: "Preparations", subTitle: "History", pageNum: 4 },
  { page: MasterEducationPage, sectionTitle: "Preparations", subTitle: "Education", pageNum: 5 },
  { page: MasterEducationPageA, sectionTitle: "Preparations", subTitle: "Education", pageNum: 6 },
  { page: MasterEducationPageB, sectionTitle: "Preparations", subTitle: "Education", pageNum: 7 },
  { page: EducationMainPage, sectionTitle: "Preparations", subTitle: "Education", pageNum: 8 },
  { page: EducationListingPage, sectionTitle: "Preparations", subTitle: "Education", pageNum: 9 },
  { page: MasterEscapePage, sectionTitle: "Preparations", subTitle: "Asian Escape", pageNum: 10 },
  { page: MasterEscapeCityPage, sectionTitle: "Preparations", subTitle: "Asian Escape", pageNum: 11 },
  { page: MasterMapPage, sectionTitle: "Preparations", subTitle: "Asian Escape", pageNum: 11 },
]

export function BookPage({ data }: BookPageProps) {
  if(data.pageNumber >= pages.length) {
    data.pageNumber = pages.length
  }
  
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header sectionTitle={pages[data.pageNumber - 1].sectionTitle} subTitle={pages[data.pageNumber - 1].subTitle} pageNumber={pages[data.pageNumber - 1].pageNum} />
      <ContentArea Page={pages[data.pageNumber - 1].page} />
      <Footer
        pageNumber={data.pageNumber}
        maxNumber={pages.length}
      // part={part}
      // clickNext={setNext}
      // clickFastNext={setFastNext}
      // clickPrevious={setPrevious}
      // clickFastPrevious={setFastPrevious}
      // click10Previous={setPrevious10}
      // click10Next={setNext10}
      />
    </div>
  )
}
