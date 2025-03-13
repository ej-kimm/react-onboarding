'use client'

import useTodos from '@/hooks/useTodos'
import type { Filters, Todo } from '@/types/todo'
import { ChangeEvent } from 'react'
import { FaTrash } from 'react-icons/fa'

export default function Todo({ filter }: { filter: Filters }) {
  const {
    todosQuery: { data: todos = [], isPending },
    updateItem,
    removeItem,
  } = useTodos()

  const handleStatusChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: Todo['id'],
  ) => {
    const completed = e.target.checked
    updateItem.mutate({ id, completed })
  }

  const handleDelete = (id: Todo['id']) => {
    removeItem.mutate(id)
  }

  if (isPending) return <p>로딩중...</p>

  const filtered = getFilteredItems(todos, filter)

  return (
    <ul className="my-5 flex-auto overflow-y-auto">
      {filtered.map(({ id, title, completed }: Todo) => (
        <li
          key={id}
          className="my-0.5 flex items-center justify-between px-4 py-2"
        >
          <input
            className="h-6 w-6"
            id={id}
            type="checkbox"
            checked={completed}
            onChange={(e) => handleStatusChange(e, id)}
          />
          <label
            htmlFor={id}
            className={`ml-3 flex-auto text-2xl transition-all ease-in-out ${completed ? 'text-gray line-through' : 'text-text'}`}
          >
            {title}
          </label>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className="bg-gray hover:bg-accent flex h-[26px] w-[26px] items-center justify-center rounded-full transition-all delay-150 ease-in-out hover:scale-[120%] hover:rotate-15"
          >
            <FaTrash fontSize={13} />
          </button>
        </li>
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
