import { BookPage } from "@/app/page/book-page"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    pageNumber: string
  }
}

export default async function Page({ params }: PageProps) {
  const {pageNumber} = await params
  const pageNum = Number.parseInt(pageNumber)

  // Find the page data by page number
  // const pageData = mockPageData.pages.find((page) => page.pageNumber === pageNum)

  // if (!pageData) {
  //   notFound()
  // }

  return (
    <BookPage data={{pageNumber: pageNum}} />
  )
}

// Generate static params for all pages
export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({
    pageNumber: (i + 1).toString(),
  }))
}
