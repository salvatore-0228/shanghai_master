export interface ContentItem {
  type: "text" | "video" | "heading" | "list"
  content?: string
  title?: string
  duration?: string
  videoUrl?: string
  items?: string[] // for list type
}

export interface ColumnData {
  title?: string
  items: ContentItem[]
}

export interface ContentAreaData {
  title?: string
  subtitle?: string
  columns: ColumnData[]
}

export interface PageData {
  // id: string
  pageNumber: number
  // totalPages: number
  // bookTitle: string
  // chapter?: string
  // copyright?: string
  // content: ContentAreaData
}

export interface BookData {
  title: string
  totalPages: number
  pages: PageData[]
}
