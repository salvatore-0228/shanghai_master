import type { ColumnData } from "@/types/book"

interface ContentColumnProps {
  data: ColumnData
  columnIndex: number
}

export function ContentColumn({ data, columnIndex }: ContentColumnProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 h-full flex flex-col overflow-hidden">
      {data.title && (
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4 flex-shrink-0">
          {data.title}
        </h3>
      )}

      <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 overflow-hidden">
        {data.items.map((item, index) => (
          <div key={index} className="content-item flex-shrink-0">
            {item.type === "text" && (
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed text-justify text-xs sm:text-sm lg:text-base">
                  {item.content}
                </p>
              </div>
            )}

            {item.type === "video" && (
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-center p-1 sm:p-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">{item.title || "Video Content"}</p>
                  {item.duration && <p className="text-xs text-gray-500 mt-1">{item.duration}</p>}
                </div>
              </div>
            )}

            {item.type === "heading" && (
              <h4 className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 mb-1 sm:mb-2">{item.content}</h4>
            )}

            {item.type === "list" && (
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-700">
                {item.items?.map((listItem, listIndex) => (
                  <li key={listIndex} className="text-justify">
                    {listItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
