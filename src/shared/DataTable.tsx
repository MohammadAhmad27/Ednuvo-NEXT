import type { ReactNode } from "react"

// Generic column definition interface
export interface ColumnDef<T> {
  header: string
  accessorKey?: keyof T
  cell?: (item: T) => ReactNode
  className?: string
}

// Props for the DataTable component
export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  keyField: keyof T
  striped?: boolean
  className?: string
  rowClassName?: string | ((item: T, index: number) => string)
}

export default function DataTable<T>({
  data,
  columns,
  keyField,
  striped = true,
  className = "",
  rowClassName,
}: DataTableProps<T>) {
  return (
    <div className={`w-full ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white sticky top-0 z-10">
            {columns?.map((column, index) => (
              <th key={index} className={`py-3 px-6 text-left text-[16px] font-medium text-[#181D27] ${column.className || ""}`}>
                {column?.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            // Determine row class name
            let rowClass = ""
            if (typeof rowClassName === "function") {
              rowClass = rowClassName(item, index)
            } else if (rowClassName) {
              rowClass = rowClassName
            } else if (striped) {
              rowClass = index % 2 === 0 ? "bg-[#EEFCEE]" : "bg-[#FFFFFF]"
            }

            return (
              <tr key={String(item[keyField])} className={rowClass}>
                {columns?.map((column, colIndex) => (
                  <td key={colIndex} className={`py-4 px-6 text-[14px] font-normal text-darkgray  ${column.className || ""}`}>
                    {column.cell ? column.cell(item) : column.accessorKey ? String(item[column.accessorKey] || "") : ""}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
