'use client'

import { LoadingSpinner } from '@/components/common'
import useTodos from '@/hooks/useTodos'
import type { Filters, Todo } from '@/types/todo'
import TodoItem from './TodoItem'

type TodoProps = {
  filter: Filters
}

export default function Todo({ filter }: TodoProps) {
  const {
    todosQuery: { data: todos = [], isPending },
  } = useTodos()

  if (isPending) return <LoadingSpinner />

  const filtered = getFilteredItems(todos, filter)

  return (
    <ul>
      {filtered.map((item: Todo) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

function getFilteredItems(todos: Todo[], filter: Filters) {
  if (filter === 'all') {
    return todos
  }
  if (filter === 'active') {
    return todos.filter((todo) => !todo.completed)
  }
  if (filter === 'completed') {
    return todos.filter((todo) => todo.completed)
  }

  return todos
}
