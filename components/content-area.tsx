import { ComponentType } from "react"
import { ContentColumn } from "./content-column"
import type { ContentAreaData } from "@/types/book"

interface ContentAreaProps {
  // data: ContentAreaData,
  Page: ComponentType<any>
}


export function ContentArea({ Page }: ContentAreaProps) {
  return (
    <main className="flex-1 bg-white overflow-hidden">
      <Page />
    </main>
  )
}
