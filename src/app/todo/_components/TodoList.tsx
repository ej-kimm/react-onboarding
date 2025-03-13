'use client'

import type { Filters } from '@/types/todo'
import { useState } from 'react'
import AddTodo from './AddTodo'
import Header from './Header'
import Todo from './Todo'

const filters: Filters[] = ['all', 'active', 'completed']

export default function TodoList() {
  const [filter, setFilter] = useState<Filters>(filters[0])

  return (
    <div className="flex h-3/5 w-full max-w-[500px] flex-col overflow-hidden rounded-2xl shadow-2xl">
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <section className="bg-bg flex h-full min-h-0 flex-col">
        <Todo filter={filter} />
        <AddTodo />
      </section>
    </div>
  )
}
