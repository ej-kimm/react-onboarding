'use client'

import { Button } from '@/components/common'
import type { Filters } from '@/types/todo'

type HeaderProps = {
  filters: Filters[]
  filter: Filters
  onFilterChange: (filter: Filters) => void
}

export default function Header({
  filters,
  filter,
  onFilterChange,
}: HeaderProps) {
  return (
    <header className="bg-bg-dark border-gray flex h-24 items-center justify-end border-b px-2">
      <ul className="flex">
        {filters.map((status) => (
          <li key={status}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onFilterChange(status)}
              className={`m-[5px] text-2xl capitalize opacity-70 transition-all delay-75 ease-in-out hover:cursor-pointer hover:opacity-100 ${filter === status && 'after:border-text opacity-100 after:block after:border'}`}
            >
              {status}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  )
}
