'use client'

import { Button } from '@/components/common'
import type { Filters } from '@/types/todo'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const filters: Filters[] = ['all', 'active', 'completed']

export default function Header() {
  const { filter } = useParams<{ filter: string }>()

  return (
    <header className="bg-bg-dark border-gray flex h-16 items-center justify-end border-b px-2 sm:h-24">
      <ul className="flex">
        {filters.map((status) => (
          <li key={status}>
            <Link href={`/todo/${status}`} replace>
              <Button
                type="button"
                variant="ghost"
                className={`relative m-0.5 text-lg capitalize opacity-70 transition-all delay-75 ease-in-out hover:opacity-100 sm:m-[5px] sm:text-2xl ${filter === status && 'opacity-100'}`}
              >
                {status}
                <span
                  className={`bg-text absolute -bottom-0.5 left-0 h-0.5 transition-all duration-300 ease-in-out ${filter === status ? 'w-full' : 'w-0'}`}
                />
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
